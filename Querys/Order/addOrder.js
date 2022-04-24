import { ApolloError } from "apollo-server-errors";
import Iyzipay from "iyzipay";
export const add_order = async (
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
  pool
) => {
  console.log(cart_items);
  try {
    const existPI = await pool.query(
      `
SELECT p.product_id,p.price,i.pieces FROM product p LEFT JOIN product_inventory i ON p.product_id=i.product_id  WHERE p.product_id=ANY($1) 
	    `,
      [product_list]
    );
    const existP = existPI.rows;
    let hasError = false;
    console.log(existP);
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
      return new ApolloError("Somthing is Wrong With Products!");
    }

    var iyzipay = new Iyzipay({
      apiKey: process.env.IYZICO_API_KEY,
      secretKey: process.env.IYZICO_SECRET_KEY,
      uri: process.env.IYZICO_URI,
    });
    var request = {
      locale: Iyzipay.LOCALE.EN,
      // conversationId: '123456789',
      price: total_price,
      paidPrice: total_price,
      currency: Iyzipay.CURRENCY.USD,
      installment: "1",
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
      // basketItems: [
      //     {
      //         id: 'BI101',
      //         name: 'Binocular',
      //         category1: 'Collectibles',
      //         category2: 'Accessories',
      //         itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
      //         price: '0.3'
      //     },
      // ]
    };

    await iyzipay.payment.create(request, async function (err, result) {
      console.log(err, result);
      let status = result.status;
      let currency = result.currency;
      let conversationId = result.paymentId;
      let paidPrice = result.paidPrice;
      let price = result.price;
      let cardAssociation = result.cardAssociation;
      let cardFamily = result.cardFamily;
      let cardType = result.cardType;
      let installment = result.installment;
      let fraudStatus = result.fraudStatus;
      let iyziCommissionFee = result.iyziCommissionFee;
      let iyziCommissionRateAmount = result.iyziCommissionRateAmount;
      let itemTransactions = result.itemTransactions;
      if (err) {
        return new ApolloError("Somthing Went Wrong!");
      }
      const order = await pool.query(
        `INSERT INTO orders (status,user_id) VALUES ($1,$2) RETURNING order_id`,
        [0, user_id]
      );
      const order_id = order.rows[0].order_id;
      await pool.query(
        `INSERT INTO order_shipping
     (order_id,address,shipping_price,country,city,area,zip_code,ip,phone_number) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [order_id, address, 0, country, city, area, zip_code, ip, phone_number]
      );
      await pool.query(
        `INSERT INTO order_payment 
      (order_id,status,owner,card_number,expire_m,expire_y,cvv,currency,conversion_id,paid_price,card_association,card_family,card_type,
        price,installment,fraud_status,iyzico_commission_fee,iyzico_commission_rate)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)
        `,
        [
          order_id,
          status,
          owner,
          card_number,
          expire_m,
          expire_y,
          cvv,
          currency,
          conversationId,
          paidPrice,
          cardAssociation,
          cardFamily,
          cardType,
          price,
          installment,
          fraudStatus,
          iyziCommissionFee,
          iyziCommissionRateAmount,
        ]
      );
      for (let i = 0; i < cart_items.length; i++) {
        let currnetI = cart_items[i];
        let currentIY = itemTransactions[i];
        await pool.query(
          `INSERT INTO order_items (order_id,product_id,quantity,payment_transaction_id,price,
  paid_price,transaction_status,iyzico_commission_fee,iyzico_commission_rate) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
          [
            order_id,
            currnetI.id,
            currnetI.quantity,
            currentIY.paymentTransactionId,
            currentIY.price,
            currentIY.paidPrice,
            currentIY.transactionStatus,
            currentIY.iyziCommissionFee,
            currentIY.iyziCommissionRateAmount,
          ]
        );
      }
    });

    return { status: "success" };
    //     const data = await pool.query(
    //       `
    //        SELECT * FROM product p
    //        INNER JOIN product_details b ON p.product_id=b.product_id
    //        INNER JOIN product_inventory i ON p.product_id=i.product_id
    //        INNER JOIN product_img m ON p.product_id=m.product_id
    //       WHERE p.product_id NOT IN ($1) LIMIT 3
    // 	    `,
    //       [product_id]
    //     );
    //     return data.rows;
  } catch (error) {
    console.log(error);
  }
};
