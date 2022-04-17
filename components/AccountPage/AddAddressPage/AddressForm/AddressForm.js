import React from "react";
import addressForm from "./addressForm.module.css";
import { useRouter } from "next/router";
import { addressSchema } from "../../../../validation/address";
import { Formik, Field, Form } from "formik";
import { ADD_USER_ADDRESS } from "../../../../graphql_f/users/Mutation/addUserAddress";
import { useMutation } from "@apollo/client";

export default function AddressForm({ address, userId }) {
  const router = useRouter();
  const [addUserAddress, { data }] = useMutation(ADD_USER_ADDRESS);
  const getA = address.address;
  const inisitial = {
    address: getA.country
      ? getA.country + " " + getA.city + " " + getA.state
      : "",
    country: getA.country,
    phone_number: getA.phone_number,
    city: getA.city,
    area: getA.state,
    zipCode: getA.zip,
  };
  return (
    <div className={addressForm.mainContainer}>
      <Formik
        initialValues={inisitial}
        validationSchema={addressSchema}
        onSubmit={async (data) => {
          const zip = JSON.parse(data.zipCode);
          addUserAddress({
            variables: {
              address: data.address,
              area: data.area,
              city: data.city,
              country: data.country,
              userId: userId,
              zipCode: zip,
              phone_number: data.phone_number,
              ip: "445.254",
            },
            onCompleted: () => {
              router.push("/account");
            },
          });
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
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
                  enterkeyhint="next"
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
                  enterkeyhint="next"
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
                  enterkeyhint="next"
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
                  enterkeyhint="next"
                  required
                />
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
                <Field
                  type="text"
                  placeholder={"Phone_number"}
                  className={addressForm.fieldE}
                  name="phone_number"
                  inputMode="numeric"
                  enterkeyhint="next"
                  required
                />
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
                  inputMode="numeric"
                  enterkeyhint="done"
                  required
                />
              </div>
            </div>
            <div className={addressForm.loginOr}>
              <button
                type="submit"
                disabled={!isValid && dirty}
                className={
                  !isValid ? addressForm.confrimBtnD : addressForm.confrimBtn
                }
              >
                Add Address
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
