import React, { useState } from "react";
import resetPassword from "./resetPassword.module.css";
import {
  changePasswordSchema,
  initialValues,
} from "../../validation/resetPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { CHANGE_PASSWORD } from "../../graphql_f/users/Mutation/changePassword";
import { useMutation } from "@apollo/client";
export default function ResetPasswordPage({ user_id }) {
  const [showPassword, setShowPassword] = useState(false);
  const [changePass, { error, loading }] = useMutation(CHANGE_PASSWORD);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  return (
    <div className={resetPassword.mainContainer}>
      {error ? (
        <div className={resetPassword.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )}
      <div className={resetPassword.title}>
        <p>Change Password</p>
      </div>
      <div className={resetPassword.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={changePasswordSchema}
          onSubmit={async (data) => {
            changePass({
              variables: {
                userId: user_id,
                password: data.password,
              },
              onError: (err) => {
                setErrorMessage(err.message);
              },
              onCompleted: () => {
                router.push("/login");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={resetPassword.fields}>
              <div className={resetPassword.inputsContainer}>
                <div className={resetPassword.holder}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    placeholder={"password"}
                    className={resetPassword.field}
                    name="password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.password && touched.password ? (
                    <div className={resetPassword.error}>
                      <p>{errors.password}</p>
                    </div>
                  ) : (
                    <div className={resetPassword.errorC}>
                      <p>Plaese Enter Your Password</p>
                    </div>
                  )}
                </div>
                <div className={resetPassword.holder}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    placeholder={"repeat_password"}
                    className={resetPassword.field}
                    name="repeat_password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.repeat_password && touched.repeat_password ? (
                    <div className={resetPassword.error}>
                      <p>{errors.repeat_password}</p>
                    </div>
                  ) : (
                    <div className={resetPassword.errorC}>
                      <p>Plaese Enter Your Confrim_Password</p>
                    </div>
                  )}
                  {!showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => setShowPassword(!showPassword)}
                      className={resetPassword.eyeIconO}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={() => setShowPassword(!showPassword)}
                      className={resetPassword.eyeIconO}
                    />
                  )}
                </div>
              </div>

              <div className={resetPassword.loginOr}>
                {!loading ? (
                  <button
                    type="submit"
                    disabled={!isValid && dirty}
                    className={
                      !isValid
                        ? resetPassword.loginBtnD
                        : resetPassword.loginBtn
                    }
                  >
                    Reset Passowrd
                  </button>
                ) : (
                  <button disabled={true} className={resetPassword.button}>
                    <span className={resetPassword.buttonLoading}> </span>
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
  );
}
