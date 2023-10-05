import styled from "@emotion/styled";
import { useFormik } from "formik";
import font from "../styles/font";

const FormSubmit = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => console.log("from submit", values),
    validate: (values) => {
      let errors = {};
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

      if (!values.channel) {
        errors.channel = "Required";
      }
      return errors;
    },
  });

  console.log("visited", formik.touched);

  return (
    <FormHolder onSubmit={formik.handleSubmit}>
      <div className="form-element">
        <label htmlFor="name">Name</label>
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </div>

      <div className="form-element">
        <label htmlFor="email">Email</label>
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>

      <div className="form-element">
        <label htmlFor="channel">Channel</label>
        {formik.touched.channel && formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}
        <input
          type="text"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
      </div>

      <button type="submit">Submit</button>
    </FormHolder>
  );
};
//------------------
//STYLE
//------------------
const FormHolder = styled.form`
  label {
    ${font.bold}
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="email"],
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

  .form-element {
  }

  .error {
    ${font.thin}
    color: red;
  }
`;

export default FormSubmit;
