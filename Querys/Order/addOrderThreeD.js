import { ApolloError } from "apollo-server-errors";
import Iyzipay from "iyzipay";
import { text } from "micro";
export const add_order_threeD = async (
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
  try {
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
    await iyzipay.threedsInitialize.create(request, function (err, result) {
      console.log(err, result);
      const plain = Buffer.from(result.threeDSHtmlContent, "base64").toString(
        "utf8"
      );
      console.log(plain);
      return plain;
    });
  } catch (error) {
    console.log(error);
  }
};
