import React, { useState } from "react";
import loginRegister from "./loginRegister.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { initialValues, loginSchema } from "../../validation/login";
import { Formik, Field, Form } from "formik";
export default function Login({ openM, setOpenM }) {
  if (!openM) return null;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={loginRegister.overlay}>
      <div className={loginRegister.mainContainer}>
        <div className={loginRegister.container}>
          <p>Login</p>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setOpenM(!openM)}
            className={loginRegister.close}
          />
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={async (data) => {
              data.email = await data.email.toLowerCase();
              console.log(data);
            }}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form className={loginRegister.fields}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  // autoComplete="off"
                  className={loginRegister.fieldE}
                />
                {errors.email && touched.email ? (
                  <div>
                    <p>{errors.email}</p>
                  </div>
                ) : null}
                <Field
                  type={showPassword ? "text" : "password"}
                  placeholder={"Password"}
                  className={loginRegister.field}
                  name="password"
                />
                {errors.password && touched.password ? (
                  <div className={loginRegister.error}>
                    <p>{errors.password}</p>
                  </div>
                ) : null}
                <FontAwesomeIcon
                  className={loginRegister.icon}
                  icon={!showPassword ? faEye : faEyeSlash}
                  onClick={() => setShowPassword(!showPassword)}
                />
                <div className={loginRegister.loginOr}>
                  <button
                    type="submit"
                    disabled={!isValid && dirty}
                    className={loginRegister.loginBtn}
                  >
                    Login
                  </button>
                  <button className={loginRegister.orRegister}>
                    Have No Account
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
      </div>
    </div>
  );
}
