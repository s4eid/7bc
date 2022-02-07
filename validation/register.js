import * as Yup from "yup";

export const initialValues = {
  email: "",
  phone_number: "",
  password: "",
  repeat_password: "",
  first_name: "",
  last_name: "",
};
export const registerSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  repeat_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string()
    .max(100, "Too Long!")
    .email("Invalid Email")
    .required("Required"),
  phone_number: Yup.number()
    .typeError("Phone Number Must Be A Number")
    .required("Required"),

  full_name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  // last_name: Yup.string()
  //   .min(3, "Too Short!")
  //   .max(30, "Too Long!")
  //   .required("Required"),
});
