import * as Yup from "yup";

export const initialValues = {
  email: "",
};
export const changePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .max(100, "Too Long!")
    .email("Invalid Email")
    .required("Required"),
});
