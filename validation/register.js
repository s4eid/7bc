import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
};
export const registerSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .max(100, "Too Long!")
    .email("Invalid Email")

    .required("Required"),

  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  last_name: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
});
