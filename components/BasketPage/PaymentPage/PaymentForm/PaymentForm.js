import React from "react";
import paymentForm from "./paymentForm.module.css";
import { Formik, Field, Form } from "formik";
import { paymentSchema, initialValues } from "../../../../validation/payment";
export default function PaymentForm() {
  return (
    <div className={paymentForm.mainContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={paymentSchema}
        onSubmit={async (data) => {
          console.log(data);
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className={paymentForm.fields}>
            <div className={paymentForm.inputsContainer}>
              <div className={paymentForm.holder}>
                {errors.cartNumber && touched.cartNumber ? (
                  <label className={paymentForm.error}>
                    {errors.cartNumber}
                  </label>
                ) : (
                  <label className={paymentForm.errorC}>
                    Plaese enter your cart number
                  </label>
                )}
                <Field
                  id="cartNumber"
                  name="cartNumber"
                  placeholder="Cart number"
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
                    Plaese enter cart owner name
                  </label>
                )}
                <Field
                  type="text"
                  name="ownerName"
                  placeholder="Cart owner"
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
