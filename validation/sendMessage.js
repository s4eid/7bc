import * as Yup from "yup";

export const initialValues = {
  email: "",
  name: "",
  phone_number: "",
  message: "",
};
export const messageSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  phone_number: Yup.string().max(100),
  message: Yup.string()
    .min(5, "Too Short!")
    .max(255, "Too Long!!")
    .required("Required"),
  email: Yup.string()
    .max(100, "Too Long!")
    .email("Invalid Email")
    .required("Required"),
});
