import React, { useState } from "react";
import LoginRegister from "../../Modals/LoginRegister/LoginRegister";
import loginRegister from "../../Modals/LoginRegister/loginRegister.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initialValues, registerSchema } from "../../validation/register";
import { faTimes, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";

export default function Register({ isRegister, setIsRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {isRegister ? (
        <>
          <p className={loginRegister.title}>Register</p>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
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
                  placeholder={"password"}
                  className={loginRegister.field}
                  name="password"
                />
                {errors.password && touched.password ? (
                  <div className={loginRegister.error}>
                    <p>{errors.password}</p>
                  </div>
                ) : null}
                <Field
                  type="text"
                  placeholder={"first_name"}
                  className={loginRegister.field}
                  name="first_name"
                />
                {errors.first_name && touched.first_name ? (
                  <div className={loginRegister.error}>
                    <p>{errors.first_name}</p>
                  </div>
                ) : null}
                <Field
                  type="text"
                  placeholder={"last_name"}
                  className={loginRegister.field}
                  name="last_name"
                />
                {errors.last_name && touched.last_name ? (
                  <div className={loginRegister.error}>
                    <p>{errors.last_name}</p>
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
                    Register
                  </button>
                  <button
                    onClick={() => setIsRegister(!isRegister)}
                    className={loginRegister.orRegister}
                  >
                    Have Account?
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
        </>
      ) : (
        <LoginRegister />
      )}
    </>
  );
}
