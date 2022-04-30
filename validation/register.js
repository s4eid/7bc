import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
  repeat_password: "",
  full_name: "",
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

  full_name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});
