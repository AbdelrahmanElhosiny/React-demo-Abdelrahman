import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

type Props = TextFieldProps & {
  name: string;
};

const PasswordField: React.FC<Props> = ({ name, ...rest }: Props) => {
  const [filed, meta] = useField(name);

  const [visible, setVisible] = useState<boolean>(false);

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
    <MUITextField
      type={visible ? "text" : "password"}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <span
            onClick={() => setVisible(!visible)}
            style={{ cursor: "pointer" }}
          >
            {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        ),
      }}
      {...configTextfield}
    />
  );
};

export default PasswordField;
