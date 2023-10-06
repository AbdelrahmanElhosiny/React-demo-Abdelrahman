import styled from "@emotion/styled";
import { useFormik } from "formik";
import font from "../styles/font";
import { Button } from "@mui/material";
import color from "../styles/color";

interface FormFields {
  name: string | null;
  email: string | null;
  password: string | null;
}

const initialValues: FormFields = {
  name: "",
  email: "",
  password: "",
};

const FormSubmit = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log("from submit", values),
    validate: (values) => {
      let errors: FormFields = {
        name: null,
        email: null,
        password: null,
      };

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)
      ) {
        errors.password = "Weak password";
      }

      if (errors.email || errors.name || errors.password) {
        return errors;
      }
    },
  });

  console.log("visited", formik.errors);

  return (
    <FormHolder onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name as string}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email as string}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password as string}
        />
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
