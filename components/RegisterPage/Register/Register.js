import React, { useState } from "react";
import register from "../register.module.css";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { initialValues, registerSchema } from "../../../validation/register";
import { REGISTER_USER } from "../../../graphql_f/users/Mutation/registerUser";
import { Formik, Field, Form } from "formik";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
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
            registerUser({
              variables: {
                fullName: data.full_name,
                email: data.email,
                password: data.password,
                phoneNumber: data.phone_number,
              },
              onCompleted: () => {
                router.push("/");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={register.fields}>
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    id="phone_number"
                    name="phone_number"
                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="phone_number"
                    inputMode="numeric"
                    className={register.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <label className={register.error}>
                      {errors.phone_number}
                    </label>
                  ) : (
                    <label className={register.errorC}>
                      Plaese Enter Your Number
                    </label>
                  )}
                </div>
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
