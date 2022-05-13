import React, { useState } from "react";
import register from "../register.module.css";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { initialValues, registerSchema } from "../../../validation/register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { REGISTER_USER } from "../../../graphql_f/users/Mutation/registerUser";
import { Formik, Field, Form } from "formik";
import SendEmail from "../../../Modals/SendEmail/SendEmail";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
  const [openM, setOpenM] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className={register.mainContainer}>
      {error ? (
        <div className={register.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )}
      <div className={register.title}>
        <h1>Register</h1>
      </div>
      <div className={register.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (data) => {
            let _email = data.email.toLowerCase();
            let _name = data.full_name.toLowerCase();
            registerUser({
              variables: {
                name: _name,
                email: _email,
                password: data.password,
              },
              onError: (err) => setErrorMessage(err.message),
              onCompleted: (data) => {
                setOpenM(data.registerUser.email);
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={register.fields}>
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={register.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className={register.error}>
                      <p>{errors.email}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Email</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    placeholder={"password"}
                    className={register.field}
                    name="password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.password && touched.password ? (
                    <div className={register.error}>
                      <p>{errors.password}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Password</p>
                    </div>
                  )}
                </div>
                <div className={register.holder}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    placeholder={"repeat_password"}
                    className={register.field}
                    name="repeat_password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.repeat_password && touched.repeat_password ? (
                    <div className={register.error}>
                      <p>{errors.repeat_password}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Confrim_Password</p>
                    </div>
                  )}
                  {!showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => setShowPassword(!showPassword)}
                      className={register.eyeIconO}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={() => setShowPassword(!showPassword)}
                      className={register.eyeIconO}
                    />
                  )}
                </div>
              </div>
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    type="text"
                    placeholder={"full_name"}
                    className={register.fieldE}
                    name="full_name"
                    enterKeyHint="done"
                    required
                  />
                  {errors.full_name && touched.full_name ? (
                    <label className={register.error}>{errors.full_name}</label>
                  ) : (
                    <label className={register.errorC}>
                      Plaese Enter Your Full_Name
                    </label>
                  )}
                </div>
              </div>
              {/* <FontAwesomeIcon
                className={register.icon}
                icon={!showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
              /> */}
              <div className={register.loginOr}>
                {!loading ? (
                  <button
                    type="submit"
                    disabled={!isValid && dirty}
                    className={
                      !isValid ? register.loginBtnD : register.loginBtn
                    }
                  >
                    Register
                  </button>
                ) : (
                  <button disabled={true} className={register.button}>
                    <span className={register.buttonLoading}> </span>
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <SendEmail openM={openM} setOpenM={setOpenM} />
    </div>
  );
}
