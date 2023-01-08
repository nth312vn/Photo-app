import * as React from "react";
import { Col, FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage, FieldProps } from "formik";
import { fieldName } from "constants/form";
export interface ISelectedOptions {
  value: number;
  label: string;
}

interface ISelectFieldProps {
  options: ISelectedOptions[];
  fieldProps: FieldProps;
  label?: string;
}

const SelectField: React.FunctionComponent<ISelectFieldProps> = (props) => {
  const { fieldProps, label, options } = props;
  const { field, form, meta } = fieldProps;
  const { name, value, onChange } = field;
  const handleChange = (newSelectedOption: any) => {
    const changeEvent = {
      target: {
        name,
        value: newSelectedOption?.value || newSelectedOption,
      },
    };
    onChange(changeEvent);
  };
  return (
    <FormGroup>
      {label && (
        <Label for={name} sm={2}>
          {label}
        </Label>
      )}
      <Col sm={10}>
        <Select
          id={name}
          {...field}
          value={options?.find((item) => item.value === value)}
          onChange={handleChange}
          options={options}
        />
      </Col>
      <ErrorMessage name={fieldName.category} />
    </FormGroup>
  );
};

export default SelectField;
