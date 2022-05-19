import React from "react";
import addressForm from "./addressForm.module.css";
import { useRouter } from "next/router";
import { addressSchema } from "../../../../validation/address";
import { Formik, Field, Form } from "formik";
import { EDIT_USER_ADDRESS } from "../../../../graphql_f/users/Mutation/editUserAddress";
import { useMutation } from "@apollo/client";
import Country from "../../../../Layouts/Countrys";
import CountryCode from "../../../../Layouts/CountryCode";
export default function AddressForm({ address, ip, userId }) {
  const router = useRouter();
  const [editUserAddress, { loading }] = useMutation(EDIT_USER_ADDRESS);
  const getA = address;
  const inisitial = {
    address: getA.address,
    country: getA.country,
    phone_number: getA.phone_number,
    city: getA.city,
    area: getA.area,
    zipCode: getA.zip_code,
  };
  return (
    <div className={addressForm.mainContainer}>
      <Formik
        initialValues={inisitial}
        validationSchema={addressSchema}
        onSubmit={async (data) => {
          editUserAddress({
            variables: {
              address: data.address,
              area: data.area,
              city: data.city,
              country: data.country,
              userId: userId,
              phone_number: data.phone_number,
              zipCode: data.zipCode,
              ip: ip,
            },
            onCompleted: () => {
              router.push("/account");
            },
          });
        }}
      >
        {({ errors, touched, isValid, dirty, setFieldValue, values }) => (
          <Form className={addressForm.fields}>
            <div className={addressForm.inputsContainer}>
              <div className={addressForm.holder}>
                {errors.address && touched.address ? (
                  <label className={addressForm.error}>{errors.address}</label>
                ) : (
                  <label className={addressForm.errorC}>
                    Plaese Enter Your Address
                  </label>
                )}
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  placeholder="Address"
                  className={addressForm.fieldA}
                  enterKeyHint="next"
                  required
                />
              </div>
              <div className={addressForm.holder}>
                {errors.city && touched.city ? (
                  <label className={addressForm.error}>{errors.city}</label>
                ) : (
                  <label className={addressForm.errorC}>
                    Plaese Enter Your City
                  </label>
                )}
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className={addressForm.fieldE}
                  enterKeyHint="next"
                  required
                />
              </div>
            </div>
            <div className={addressForm.inputsContainer}>
              <div className={addressForm.holder}>
                {errors.area && touched.area ? (
                  <label className={addressForm.error}>{errors.area}</label>
                ) : (
                  <label className={addressForm.errorC}>
                    Plaese Enter Your Area
                  </label>
                )}
                <Field
                  placeholder={"Area"}
                  className={addressForm.field}
                  name="area"
                  enterKeyHint="next"
                  required
                />
              </div>
              <div className={addressForm.holder}>
                {errors.country && touched.country ? (
                  <label className={addressForm.error}>{errors.country}</label>
                ) : (
                  <label className={addressForm.errorC}>
                    Plaese Enter Your Country
                  </label>
                )}
                <Field
                  placeholder={"Coutry"}
                  className={addressForm.field}
                  name="country"
                  as="select"
                  enterKeyHint="next"
                  required
                >
                  <Country />
                </Field>
              </div>
            </div>
            <div className={addressForm.inputsContainer}>
              <div className={addressForm.holder}>
                {errors.phone_number && touched.phone_number ? (
                  <label className={addressForm.error}>
                    {errors.phone_number}
                  </label>
                ) : (
                  <label className={addressForm.errorC}>
                    Plaese Enter Your Phone_number
                  </label>
                )}
                <div className={addressForm.holderPhone}>
                  <div className={addressForm.selectContainer}>
                    <Field
                      // required
                      // type=""
                      onChange={(e) => {
                        setFieldValue("phone_number", `+${e.target.value}`);
                        setFieldValue("code", e.target.value);
                      }}
                      value={values.code}
                      as="select"
                      name="code"
                      placeholder={"Code"}
                    >
                      <CountryCode />
                    </Field>
                  </div>
                  <Field
                    type="text"
                    placeholder={"Phone_number"}
                    className={addressForm.fieldE}
                    name="phone_number"
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
            </div>
            <div className={addressForm.inputsContainer}>
              <div className={addressForm.holder}>
                {errors.zipCode && touched.zipCode ? (
                  <label className={addressForm.error}>{errors.zipCode}</label>
                ) : (
                  <label className={addressForm.errorC}>
                    Plaese Enter Your zipCode
                  </label>
                )}
                <Field
                  type="text"
                  placeholder={"ZipCode"}
                  className={addressForm.fieldE}
                  name="zipCode"
                  enterKeyHint="done"
                  required
                />
              </div>
            </div>
            <div className={addressForm.loginOr}>
              {!loading ? (
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={
                    !isValid ? addressForm.confrimBtnD : addressForm.confrimBtn
                  }
                >
                  Edit Address
                </button>
              ) : (
                <button disabled={true} className={addressForm.button}>
                  <span className={addressForm.buttonLoading}> </span>
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
