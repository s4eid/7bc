import React, { useState } from "react";
import login from "../login.module.css";
import { initialValues, loginSchema } from "../../../validation/login";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../graphql_f/users/Mutation/loginUser";
import { getUserInfo } from "../../../Redux/Actions/User/user";
import { useDispatch } from "react-redux";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const router = useRouter();
  return (
    <div className={login.mainContainer}>
      <div className={login.title}>
        <p>Login</p>
      </div>
      <div className={login.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async (data) => {
            data.email = await data.email.toLowerCase();

            loginUser({
              variables: {
                email: data.email,
                password: data.password,
              },
              onCompleted: () => {
                dispatch(getUserInfo());
                router.push("/");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={login.fields}>
              <div className={login.inputsContainer}>
                <div className={login.holder}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={login.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className={login.error}>
                      <p>{errors.email}</p>
                    </div>
                  ) : (
                    <div className={login.errorC}>
                      <p>Plaese Enter Your Email</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={login.inputsContainer}>
                <div className={login.holder}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    placeholder={"password"}
                    className={login.field}
                    name="password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.password && touched.password ? (
                    <div className={login.error}>
                      <p>{errors.password}</p>
                    </div>
                  ) : (
                    <div className={login.errorC}>
                      <p>Plaese Enter Your Password</p>
                    </div>
                  )}
                </div>
              </div>
              {/* <FontAwesomeIcon
                className={register.icon}
                icon={!showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
              /> */}
              <div className={login.loginOr}>
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={login.loginBtn}
                >
                  Login
                </button>
                <div
                  type="button"
                  onClick={() => router.push("/register")}
                  className={login.orRegister}
                >
                  Have no account?
                </div>
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