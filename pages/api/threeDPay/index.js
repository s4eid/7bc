import { pool } from "../../../db";
import Iyzipay from "iyzipay";

export default async function handlre(req, res) {
  if (req.method === "POST") {
    try {
      const { status, paymentId, conversationData, conversationId, mdStatus } =
        req.body;
      if (status == "success") {
        var iyzipay = new Iyzipay({
          apiKey: process.env.IYZICO_API_KEY,
          secretKey: process.env.IYZICO_SECRET_KEY,
          uri: process.env.IYZICO_URI,
        });

        await iyzipay.threedsPayment.create(
          {
            conversationId: conversationId,
            locale: Iyzipay.LOCALE.EN,
            paymentId: paymentId,
            conversationData: conversationData,
          },
          async function (err, result) {
            let status = result.status;
            let currency = result.currency;
            let conversationId = result.conversationId;
            let paymentId = result.paymentId;
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
            if (status === "failure") {
              res.status(500).json({ error: "Somthing Went Wrong!" });
            }
            const order = await pool.query(
              `update orders set status=$1 where order_id=$2 returning order_id`,
              [0, conversationId]
            );
            const order_id = order.rows[0].order_id;
            await pool.query(
              `update order_payment set
      status=$1,currency=$2,payment_id=$3,paid_price=$4,card_association=$5,card_family=$6,card_type=$7,
        price=$8,installment=$9,fraud_status=$10,iyzico_commission_fee=$11,iyzico_commission_rate=$12
         where order_id=$13
        `,
              [
                status,
                currency,
                paymentId,
                paidPrice,
                cardAssociation,
                cardFamily,
                cardType,
                price,
                installment,
                fraudStatus,
                iyziCommissionFee,
                iyziCommissionRateAmount,
                order_id,
              ]
            );
            const items = await pool.query(
              `select product_id,quantity from order_items where order_id=$1`,
              [order_id]
            );
            const cart_items = items.rows;
            for (let i = 0; i < cart_items.length; i++) {
              let currnetI = cart_items[i];
              let currentId = currnetI.product_id;
              let currentIY = itemTransactions[i];
              let findOne = itemTransactions.find(
                ({ itemId }) => itemId == currentId
              );
              await pool.query(
                `update order_items set payment_transaction_id=$1,price=$2,
  paid_price=$3,transaction_status=$4,iyzico_commission_fee=$5,iyzico_commission_rate=$6 where order_id=$7 and product_id=$8`,
                [
                  currentIY.paymentTransactionId,
                  currentIY.price,
                  currentIY.paidPrice,
                  currentIY.transactionStatus,
                  currentIY.iyziCommissionFee,
                  currentIY.iyziCommissionRateAmount,
                  order_id,
                  findOne.itemId,
                ]
              );
            }
            for (let m = 0; m < cart_items.length; m++) {
              let currnetP = cart_items[m];
              await pool.query(
                `
      update product_inventory set pieces=pieces-$1 where product_id=$2
	    `,
                [currnetP.quantity, currnetP.product_id]
              );
            }
          }
        );
        return res.redirect(`${process.env.URL}/`);
      }
      res.redirect(`${process.env.URL}/payment_error`);
    } catch (error) {
      res.redirect(`${process.env.URL}/payment_error`);
    }
  }
}
