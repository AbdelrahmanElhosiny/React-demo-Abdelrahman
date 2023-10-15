import { Formik, Form } from "formik";
import styled from "@emotion/styled";
import * as Yup from "yup";
import Textfield from "./FormComponents/Textfield";
import SelectField from "./FormComponents/SelectField";
import Countries from "./Countries.json";
import Checkbox from "./FormComponents/Checkbox";
import Radiogroup from "./FormComponents/Radiogroup";
import { Button } from "@mui/material";

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  tos: boolean;
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
  tos: false,
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid E-mail"),
  country: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Weak password"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  accountType: Yup.string().required("You must select a type"),
  tos: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
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
        <Form className="form">
          <Textfield name="firstName" label="First Name" />
          <Textfield name="lastName" label="Last Name" />
          <Textfield name="email" label="E-mail" />
          <SelectField name="country" label="Country" options={Countries} />
          <Textfield name="password" label="Password" type="password" />
          <Textfield
            name="confirmPassword"
            label="Confirm password"
            type="password"
          />
          <Radiogroup
            row
            name="accountType"
            legend="Select your account type"
            options={[
              { label: "Basic", value: "basic", key: "basic" },
              {
                label: "Gold",
                value: "gold",
                key: "gold",
              },
              {
                label: "Platinum",
                value: "platinum",
                key: "platinum",
              },
            ]}
          />
          <Checkbox
            name="tos"
            legend="Terms and conditions"
            label="I agree to the terms and conditions"
          />
          <Button size="large" variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </FormHolder>
  );
}

const FormHolder = styled.div`
  Form {
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
`;

export default RegisterForm;
