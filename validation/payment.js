import * as Yup from "yup";

export const initialValues = {
  ownerName: "",
  cartNumber: "",
  month: "",
  year: "",
  cvv: "",
};
export const paymentSchema = Yup.object().shape({
  ownerName: Yup.string().max(100).required("Required"),
  cartNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(16, "Must be at least 16 digits")
    .max(19, "Must be max 19 digits")
    .required("Required"),
  month: Yup.string().required("Required"),
  year: Yup.string().required("Required"),
  cvv: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(4, "Must be max 4 digits")
    .required("Required"),
});
