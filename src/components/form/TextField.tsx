import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

type Props = TextFieldProps & {
  name: string;
  innerRef?: any;
};

const TextField = ({ name, innerRef, ...rest }: Props) => {
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

  return (
    <MUITextField variant="outlined" {...configTextfield} ref={innerRef} />
  );
};

export default TextField;
