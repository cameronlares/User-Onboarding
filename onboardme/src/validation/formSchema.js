import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  name: Yup
    .string()
    .min(3, "Usermame must be at least 3 characters long.")
    .required("Name is Required"),
  password: Yup
    .string()
    .min(7, " Password must be at least 7 characters long" )
    .required("Password is Required"),
  termsofservice: Yup
    .boolean()
    .required([true])
})

export default formSchema
