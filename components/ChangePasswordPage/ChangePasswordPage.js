import React, { useState } from "react";
import changePassword from "./changePassword.module.css";
import {
  changePasswordSchema,
  initialValues,
} from "../../validation/changePassword";
import SendEmailPassword from "../../Modals/SendEmailPassword/SendEmailPassword";

import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { RESET_PASSWORD } from "../../graphql_f/users/Mutation/resetPassword";

export default function ChangePasswordPage() {
  const [ResetPass, { error, loading }] = useLazyQuery(RESET_PASSWORD);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [openM, setOpenM] = useState(false);
  return (
    <>
      <div className={changePassword.mainContainer}>
        {error ? (
          <div className={changePassword.errorMessage}>
            <p>{errorMessage}</p>
          </div>
        ) : (
          <></>
        )}
        <div className={changePassword.title}>
          <p>Change Password</p>
        </div>
        <div className={changePassword.container}>
          <Formik
            initialValues={initialValues}
            validationSchema={changePasswordSchema}
            onSubmit={async (data) => {
              const _email = await data.email.toLowerCase();
              ResetPass({
                variables: {
                  email: _email,
                },
                onError: (err) => {
                  setErrorMessage(err.message);
                },
                onCompleted: (data) => {
                  setOpenM(data.resetPassword);
                },
              });
            }}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form className={changePassword.fields}>
                <div className={changePassword.inputsContainer}>
                  <div className={changePassword.holder}>
                    <Field
                      placeholder={"email"}
                      className={changePassword.field}
                      name="email"
                      enterKeyHint="next"
                      required
                    />
                    {errors.email && touched.email ? (
                      <div className={changePassword.error}>
                        <p>{errors.email}</p>
                      </div>
                    ) : (
                      <div className={changePassword.errorC}>
                        <p>Plaese Enter Your Email</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className={changePassword.loginOr}>
                  {!loading ? (
                    <button
                      type="submit"
                      disabled={!isValid && dirty}
                      className={
                        !isValid
                          ? changePassword.loginBtnD
                          : changePassword.loginBtn
                      }
                    >
                      Change Password
                    </button>
                  ) : (
                    <button className={changePassword.button}>
                      <span className={changePassword.buttonLoading}> </span>
                    </button>
                  )}

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
      </div>
      <SendEmailPassword setOpenM={setOpenM} openM={openM} />
    </>
  );
}
