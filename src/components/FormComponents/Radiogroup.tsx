import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

type Props = {
  name: string;
  legend: string;
  options: {
    value: string;
    label: string;
    key: string;
  }[];
  row?: boolean;
};

const RadioGroupWrapper = ({ name, options, legend, row, ...rest }: Props) => {
  const { setFieldValue } = useFormikContext();

  const [filed, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configRadioGroup = {
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
      <RadioGroup row={row}>
        {options.map((option) => {
          return (
            <FormControlLabel
              {...configRadioGroup}
              control={<Radio value={option.value} />}
              label={option.label}
              key={option.key}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupWrapper;
