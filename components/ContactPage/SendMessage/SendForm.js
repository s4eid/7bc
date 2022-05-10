import React from "react";
import sendForm from "./sendMessage.module.css";
import { Formik, Field, Form } from "formik";
import { initialValues, messageSchema } from "../../../validation/sendMessage";

export default function SendForm() {
  return (
    <div className={sendForm.mainContainer}>
      {/* {error ? (
        <div className={sendForm.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )} */}
      <div className={sendForm.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={messageSchema}
          onSubmit={async (data) => {
            //     data.email = await data.email.toLowerCase();
            console.log(data);
            //     loginUser({
            //       variables: {
            //         email: data.email,
            //         password: data.password,
            //       },
            //       onError: (err) => setErrorMessage(err.message),
            //       onCompleted: () => {
            //         dispatch(getUserInfo());
            //         router.push("/");
            //       },
            //     });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={sendForm.fields}>
              <div className={sendForm.inputsContainer}>
                <div className={sendForm.holder}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={sendForm.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className={sendForm.error}>
                      <p>{errors.email}</p>
                    </div>
                  ) : (
                    <div className={sendForm.errorC}>
                      <p>Plaese Enter Your Email</p>
                    </div>
                  )}
                </div>
                <div className={sendForm.holder}>
                  <Field
                    name="name"
                    placeholder="Name"
                    className={sendForm.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.name && touched.name ? (
                    <div className={sendForm.error}>
                      <p>{errors.name}</p>
                    </div>
                  ) : (
                    <div className={sendForm.errorC}>
                      <p>Plaese Enter Your Name</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={sendForm.inputsContainer}>
                <div className={sendForm.holder}>
                  <Field
                    name="phone_number"
                    placeholder="Phone Number"
                    className={sendForm.fieldE}
                    enterKeyHint="next"
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <div className={sendForm.error}>
                      <p>{errors.phone_number}</p>
                    </div>
                  ) : (
                    <div className={sendForm.errorC}>
                      <p>Plaese Enter Your Name</p>
                    </div>
                  )}
                </div>
              </div>

              <div className={sendForm.inputsContainer}>
                <div className={sendForm.holderM}>
                  <Field
                    name="message"
                    as="textarea"
                    spellCheck="false"
                    autoComplete="off"
                    placeholder="Message"
                    className={sendForm.fieldM}
                    enterKeyHint="done"
                    required
                  />
                  {errors.message && touched.message ? (
                    <div className={sendForm.error}>
                      <p>{errors.message}</p>
                    </div>
                  ) : (
                    <div className={sendForm.errorC}>
                      <p>Plaese Enter Your Message</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={sendForm.loginOr}>
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={!isValid ? sendForm.loginBtnD : sendForm.loginBtn}
                >
                  Send
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
  );
}
