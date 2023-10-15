import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

type Props = TextFieldProps & {
  name: string;
};

const TextfieldWrapper = ({ name, ...rest }: Props) => {
  const [filed, meta] = useField(name);

  const configTextfield = {
    ...filed,
    ...rest,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return <TextField variant="outlined" {...configTextfield} />;
};

export default TextfieldWrapper;
