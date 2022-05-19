import React, { useState } from "react";
import sendForm from "./sendMessage.module.css";
import { Formik, Field, Form } from "formik";
import { initialValues, messageSchema } from "../../../validation/sendMessage";
import { useLazyQuery } from "@apollo/client";
import { SEND_EMIAL } from "../../../graphql_f/users/Query/sendEmail";
import { useRouter } from "next/router";

export default function SendForm() {
  const router = useRouter();
  const [sendMail, { loading, error }] = useLazyQuery(SEND_EMIAL);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className={sendForm.mainContainer}>
      {error ? (
        <div className={sendForm.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )}
      <div className={sendForm.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={messageSchema}
          onSubmit={async (data) => {
            data.email = await data.email.toLowerCase();
            sendMail({
              variables: {
                email: data.email,
                name: data.name,
                phoneNumber: data.phone_number,
                message: data.message,
              },
              onError: (err) => setErrorMessage(err.message),
              onCompleted: () => {
                router.push("/");
              },
            });
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
                      <p>Plaese Enter Your Phone Number</p>
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
                {!loading ? (
                  <button
                    type="submit"
                    disabled={!isValid && dirty}
                    className={
                      !isValid ? sendForm.loginBtnD : sendForm.loginBtn
                    }
                  >
                    Send
                  </button>
                ) : (
                  <button disabled={true} className={sendForm.button}>
                    <span className={sendForm.buttonLoading}> </span>
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
