import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};
export const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .max(100, "Too Long!")
    .email("Invalid Email")
    .required("Required"),
});
