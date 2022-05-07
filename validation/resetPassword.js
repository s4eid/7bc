import * as Yup from "yup";

export const initialValues = {
  password: "",
  repeat_password: "",
};
export const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  repeat_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
