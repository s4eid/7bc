import React, { useState } from "react";
import register from "../register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initialValues, registerSchema } from "../../../validation/register";
import { faTimes, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={register.mainContainer}>
      <div className={register.title}>
        <p>Register</p>
      </div>
      <div className={register.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (data) => {
            data.email = await data.email.toLowerCase();
            console.log(data);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={register.fields}>
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="phone_number"
                    autoComplete="off"
                    className={register.fieldE}
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <div className={register.error}>
                      <p>{errors.phone_number}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Number</p>
                    </div>
                  )}
                </div>
                <div className={register.holder}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    className={register.fieldE}
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
                </div>
              </div>
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    type="text"
                    placeholder={"first_name"}
                    autoComplete="off"
                    className={register.fieldE}
                    name="first_name"
                  />
                  {errors.first_name && touched.first_name ? (
                    <div className={register.error}>
                      <p>{errors.first_name}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your First_Name</p>
                    </div>
                  )}
                </div>
                <div className={register.holder}>
                  <Field
                    type="text"
                    placeholder={"last_name"}
                    autoComplete="off"
                    className={register.fieldE}
                    name="last_name"
                  />
                  {errors.last_name && touched.last_name ? (
                    <div className={register.error}>
                      <p>{errors.last_name}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Last_Name</p>
                    </div>
                  )}
                </div>
              </div>
              {/* <FontAwesomeIcon
                className={register.icon}
                icon={!showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
              /> */}
              <div className={register.loginOr}>
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={register.loginBtn}
                >
                  Register
                </button>
                {/* <button
                  onClick={() => setIsRegister(!isRegister)}
                  className={register.orRegister}
                >
                  Have Account?
                </button> */}
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
