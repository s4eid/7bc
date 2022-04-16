import * as Yup from "yup";

export const initialValues = {
  address: "",
  country: "",
  city: "",
  area: "",
  phone_number: "",
  zipCode: "",
};
export const addressSchema = Yup.object().shape({
  address: Yup.string().max(200).required("Required"),
  country: Yup.string().max(100).required("Required"),
  city: Yup.string().max(100).required("Required"),
  area: Yup.string().max(100).required("Required"),
  phone_number: Yup.string().max(100).required("Required"),
  zipCode: Yup.number().required("Required"),
});
