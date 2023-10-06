import styled from "@emotion/styled";
import { useFormik } from "formik";
import font from "../styles/font";
import { Button } from "@mui/material";
import color from "../styles/color";
import * as Yup from "yup";

interface FormFields {
  name: string | null;
  email: string | null;
  password: string | null;
}
//------------------
// Formik content
//------------------
const initialValues: FormFields = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values: FormFields) => {
  console.log("from submit", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Weak password"
    ),
});
// //------------------
// Formik Hook
// //------------------
const FormSubmit = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("visited", formik.errors);

  return (
    <FormHolder onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <input type="text" {...formik.getFieldProps("name")} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <input type="text" {...formik.getFieldProps("email")} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <input type="password" {...formik.getFieldProps("password")} />
      </div>

      <Button size="large" variant="contained" type="submit">
        Submit
      </Button>
    </FormHolder>
  );
};
//------------------
//STYLE
//------------------
const FormHolder = styled.form`
  display: grid;

  label {
    display: inline;
    ${font.regular}
    font-size: 1.2em;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"],
  textarea {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1.5em;
  }

  .error {
    display: inline;
    margin-left: 1em;
    ${font.thin}
    color: red;
  }

  .MuiButtonBase-root {
    margin-top: 0.8em;
    ${font.bold};
    background-color: ${color.violet};
    opacity: 0.8;
    transition: 0.3s;
    :hover {
      background-color: ${color.violet};
      opacity: 1;
    }
  }
`;

export default FormSubmit;
