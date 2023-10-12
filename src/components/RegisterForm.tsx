import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import * as Yup from "yup";

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
  accountType: string;
}
//------------------
// Formik content
//------------------
const initialValues: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  password: "",
  confirmPassword: "",
  accountType: "",
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid E-mail"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Weak password"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Passwords must match"
  ),
  accountType: Yup.string().required("Required"),
});
const onSubmit = (values: FormFields) => {
  console.log(values);
};
// //------------------
// JSX
// //------------------
function RegisterForm() {
  return (
    <FormHolder>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <Field></Field>
          </div>
        </Form>
      </Formik>
    </FormHolder>
  );
}

const FormHolder = styled.div``;

export default RegisterForm;
