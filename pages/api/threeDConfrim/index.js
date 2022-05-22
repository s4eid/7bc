import { pool } from "../../../db";
import Iyzipay from "iyzipay";
import { ERROR_CODES } from "../../../errorCodes/errorCodes";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = JSON.parse(req.body);
      const {
        user_id,
        email,
        full_name,
        owner,
        card_number,
        expire_m,
        expire_y,
        total_price,
        product_list,
        cart_items,
        cvv,
        address,
        country,
        phone_number,
        city,
        area,
        zip_code,
        ip,
      } = body;
      const existPI = await pool.query(
        `
SELECT p.product_id,p.price,i.pieces FROM product p LEFT JOIN product_inventory i ON
 p.product_id=i.product_id  WHERE p.product_id=ANY($1) 
	    `,
        [product_list]
      );
      const existP = existPI.rows;
      let hasError = false;
      for (let i = 0; i < existP.length; i++) {
        let currentId = existP[i].product_id;
        let findOne = cart_items.find(({ id }) => id == currentId);
        if (
          existP[i].pieces < findOne.quantity ||
          existP[i].price !== findOne.priceEach
        ) {
          hasError = true;
          break;
        }
      }
      if (hasError) {
        return res.status(500).json({
          error: "Product Quantity Is Not Available In Stock!",
          code: ERROR_CODES.CART_ITEMS,
        });
      }
      const order = await pool.query(
        `insert into orders(status,user_id)values($1,$2) returning order_id`,
        [2, user_id]
      );
      console.log(order.rows[0]);
      var iyzipay = new Iyzipay({
        apiKey: process.env.IYZICO_API_KEY,
        secretKey: process.env.IYZICO_SECRET_KEY,
        uri: process.env.IYZICO_URI,
      });
      var request = {
        locale: Iyzipay.LOCALE.EN,
        conversationId: order.rows[0].order_id,
        price: total_price,
        paidPrice: total_price,
        currency: Iyzipay.CURRENCY.USD,
        installment: "1",
        callbackUrl: process.env.CALLBACK_URL,
        // basketId: 'B67832',
        // paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
        // paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
        paymentCard: {
          cardHolderName: owner,
          cardNumber: card_number,
          expireMonth: expire_m,
          expireYear: expire_y,
          cvc: cvv,
          registerCard: "0",
        },
        buyer: {
          id: user_id,
          name: full_name,
          surname: full_name,
          gsmNumber: phone_number,
          email: email,
          identityNumber: user_id,
          // lastLoginDate: '2015-10-05 12:43:35',
          // registrationDate: '2013-04-21 15:12:09',
          registrationAddress: address,
          ip: ip,
          city: city,
          country: country,
          zipCode: zip_code,
        },
        shippingAddress: {
          contactName: full_name,
          city: city,
          country: country,
          address: address,
          zipCode: zip_code,
        },
        billingAddress: {
          contactName: full_name,
          city: city,
          country: country,
          address: address,
          zipCode: zip_code,
        },
        basketItems: cart_items,
      };
      await iyzipay.threedsInitialize.create(
        request,
        async function (err, result) {
          if (result.status === "success") {
            for (let i = 0; i < cart_items.length; i++) {
              let currnetI = cart_items[i];
              // let currentIY = itemTransactions[i];
              await pool.query(
                `INSERT INTO order_items (order_id,product_id,quantity) VALUES($1,$2,$3)`,
                [
                  order.rows[0].order_id,
                  currnetI.id,
                  currnetI.quantity,
                  // currentIY.paymentTransactionId,
                  // currentIY.price,
                  // currentIY.paidPrice,
                  // currentIY.transactionStatus,
                  // currentIY.iyziCommissionFee,
                  // currentIY.iyziCommissionRateAmount,
                ]
              );
            }
            await pool.query(`update users set p_html=$1 where user_id=$2`, [
              result.threeDSHtmlContent,
              user_id,
            ]);
            await pool.query(
              `INSERT INTO order_shipping
     (order_id,address,shipping_price,country,city,area,zip_code,ip,phone_number) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
              [
                order.rows[0].order_id,
                address,
                0,
                country,
                city,
                area,
                zip_code,
                ip,
                phone_number,
              ]
            );
            await pool.query(
              `INSERT INTO order_payment 
      (order_id,status,owner,card_number,expire_m,expire_y,cvv)
        VALUES ($1,$2,$3,$4,$5,$6,$7)
        `,
              [
                order.rows[0].order_id,
                "3D_started",
                owner,
                card_number,
                expire_m,
                expire_y,
                cvv,
              ]
            );
            await success(result.status);
          } else if (result.status === "failure") {
            await pool.query(`delete from order_payment where order_id=$1`, [
              order.rows[0].order_id,
            ]);
            await pool.query(`delete from order_shipping where order_id=$1`, [
              order.rows[0].order_id,
            ]);
            await pool.query(`delete from order_items where order_id=$1`, [
              order.rows[0].order_id,
            ]);
            await pool.query(`delete from orders where order_id=$1`, [
              order.rows[0].order_id,
            ]);
            return res
              .status(500)
              .json({ error: "Payment Failed!", code: ERROR_CODES.PAYMENT });
          }
        }
      );
      const success = (status) => {
        return res.status(200).json({ status: status });
      };
    } catch (error) {
      await pool.query(`delete from order_payment where order_id=$1`, [
        order.rows[0].order_id,
      ]);
      await pool.query(`delete from order_shipping where order_id=$1`, [
        order.rows[0].order_id,
      ]);
      await pool.query(`delete from order_items where order_id=$1`, [
        order.rows[0].order_id,
      ]);
      await pool.query(`delete from orders where order_id=$1`, [
        order.rows[0].order_id,
      ]);
      return res
        .status(500)
        .json({ error: "Payment Failed!", code: ERROR_CODES.PAYMENT });
    }
  }
}
