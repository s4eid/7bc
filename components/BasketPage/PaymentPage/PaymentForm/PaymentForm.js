import React from "react";
import paymentForm from "./paymentForm.module.css";
import { Formik, Field, Form } from "formik";
import { paymentSchema } from "../../../../validation/payment";
import { getRightInfo } from "../../../../Functions/payment";
import { ADD_ORDER } from "../../../../graphql_f/order/Mutation/addOrder";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function PaymentForm({ info, user, product }) {
  const [addOrder, { data }] = useMutation(ADD_ORDER);
  const router = useRouter();
  const initialValues = {
    ownerName: info?.owner ? info.owner : "",
    cardNumber: info?.card_number ? info.card_number : "",
    month: info?.expire_m ? info.expire_m : "",
    year: info?.expire_y ? info.expire_y : "",
    cvv: info?.cvv ? info.cvv : "",
  };
  return (
    <div className={paymentForm.mainContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={paymentSchema}
        onSubmit={async (data) => {
          console.log(data);
          try {
            const { _info, list } = await getRightInfo(product.cartItems);
            const total = _info.reduce((x, y) => x + y.price, 0);
            const _cvv = parseInt(data.cvv);
            const _month = parseInt(data.month);
            const _year = parseInt(data.year);
            addOrder({
              variables: {
                userId: user.user_id,
                email: user.email,
                fullName: user.name,
                owner: data.ownerName,
                cardNumber: data.cardNumber,
                expireM: _month,
                expireY: _year,
                totalPrice: total,
                productList: list,
                cvv: _cvv,
                address: info.address,
                country: info.country,
                phoneNumber: info.phone_number,
                city: info.city,
                area: info.area,
                zipCode: info.zip_code,
                ip: info.ip,
                cartItems: _info,
              },
              onCompleted: () => {
                localStorage.removeItem("cartItems");
                router.reload();
              },
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className={paymentForm.fields}>
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holder}>
                {errors.cardNumber && touched.cardNumber ? (
                  <label className={paymentForm.error}>
                    {errors.cardNumber}
                  </label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter your card number
                  </label>
                )}
                <Field
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card number"
                  className={paymentForm.fieldE}
                  enterKeyHint="next"
                  required
                />
              </div>
              <div className={paymentForm.holder}>
                {errors.ownerName && touched.ownerName ? (
                  <label className={paymentForm.error}>
                    {errors.ownerName}
                  </label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter card owner name
                  </label>
                )}
                <Field
                  type="text"
                  name="ownerName"
                  placeholder="Card owner"
                  className={paymentForm.fieldE}
                  enterKeyHint="next"
                  required
                />
              </div>
            </div>
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holder}>
                {errors.year && touched.year ? (
                  <label className={paymentForm.error}>{errors.year}</label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter expire year
                  </label>
                )}
                <Field
                  as="select"
                  placeholder="expire year"
                  className={paymentForm.fieldS}
                  name="year"
                  enterKeyHint="next"
                  required
                >
                  <option value="" selected disabled hidden>
                    Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                  <option value="2036">2036</option>
                  <option value="2037">2037</option>
                  <option value="2038">2038</option>
                  <option value="2039">2039</option>
                  <option value="2040">2040</option>
                  <option value="2041">2041</option>
                </Field>
              </div>

              <div className={paymentForm.holder}>
                {errors.month && touched.month ? (
                  <label className={paymentForm.error}>{errors.month}</label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter expire month
                  </label>
                )}
                <Field
                  as="select"
                  placeholder={"Expire month"}
                  className={paymentForm.fieldS}
                  name="month"
                  enterKeyHint="next"
                  required
                >
                  <option value="" selected disabled hidden>
                    Month
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Field>
              </div>
            </div>
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holder}>
                {errors.cvv && touched.cvv ? (
                  <label className={paymentForm.error}>{errors.cvv}</label>
                ) : (
                  <label className={paymentForm.errorC}>Plaese enter CVV</label>
                )}
                <Field
                  type="text"
                  placeholder={"CVV"}
                  className={paymentForm.fieldE}
                  name="cvv"
                  inputMode="numeric"
                  enterKeyHint="done"
                  required
                />
              </div>
            </div>
            <div className={paymentForm.loginOr}>
              <button
                type="submit"
                disabled={!isValid && dirty}
                className={
                  !isValid ? paymentForm.confrimBtnD : paymentForm.confrimBtn
                }
              >
                Pay
              </button>
              {/* {loading ? ( */}
              {/* <Loading /> */}
              {/* ) : error ? ( */}
              {/* <Error error={errorLogin} /> */}
              {/* ) : ( */}
              <></>
              {/* )} */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
