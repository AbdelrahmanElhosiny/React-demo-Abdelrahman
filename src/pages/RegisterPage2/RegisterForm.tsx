import { Formik, Form, FormikConfig } from "formik";
import styled from "@emotion/styled";
import * as yup from "yup";
import {
  TextField,
  SelectFiled,
  Checkbox,
  RadioGroup,
  PasswordField,
} from "../../components/form";
import Countries from "../../assets/Countries.json";
import { Button } from "@mui/material";
import color from "../../styles/color";

interface Props {
  onSubmit: (values: FormFields) => void;
}

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
const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid E-mail"),
  country: yup.string().required("Required"),
  password: yup
    .string()
    .required("Required")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Weak password"
    // )
    .min(8, "Must be 8 characters or more")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/[!@#\$%\^&\*]+/, "One special character")
    .matches(/\d+/, "One number"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  accountType: yup.string().required("You must select a type"),
  tos: yup
    .boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});
// const onSubmit = (values: FormFields) => {
//   console.log(values);
// };
// //------------------
// JSX
// //------------------
const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const formProps: FormikConfig<FormFields> = {
    initialValues,
    onSubmit,
    validationSchema,
  };

  return (
    <FormHolder>
      <Formik {...formProps}>
        <Form className="form">
          <TextField name="firstName" label="First Name" />
          <TextField name="lastName" label="Last Name" />
          <TextField name="email" label="E-mail" />
          <SelectFiled name="country" label="Country" options={Countries} />
          <PasswordField name="password" label="Password" />
          <PasswordField name="confirmPassword" label="Confirm password" />
          <RadioGroup
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
          <div className="buttonW">
            <Button
              size="large"
              variant="contained"
              type="submit"
              className="s-button"
            >
              Submit
            </Button>
            <Button
              size="large"
              variant="contained"
              type="reset"
              className="r-button"
            >
              Reset
            </Button>
          </div>
        </Form>
      </Formik>
    </FormHolder>
  );
};

const FormHolder = styled.div`
  Form {
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
  .buttonW {
    display: flex;
    width: 100%;
    gap: 0.8em;
  }
  .s-button,
  .r-button {
    width: 100%;
  }

  .s-button {
    background-color: ${color.violet};
  }

  .r-button {
    background-color: ${color.purple};
  }
`;

export type { FormFields };
export default RegisterForm;
