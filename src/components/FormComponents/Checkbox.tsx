import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

type Props = {
  name: string;
  label: string;
  legend: string;
};

const CheckboxWrapper = ({ name, label, legend, ...rest }: Props) => {
  const { setFieldValue } = useFormikContext();

  const [filed, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...rest,
    ...filed,
    onChange: handleChange,
  };

  const configFormControl: any = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          {...configCheckbox}
          control={<Checkbox />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
