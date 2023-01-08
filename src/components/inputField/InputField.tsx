import * as React from "react";
import { Col, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage, FieldProps } from "formik";
import { InputProps } from "reactstrap";
import { fieldName } from "constants/form";
import { IPhotoForm } from "components/photoFom/PhotoForm";

interface IInputFieldProps extends InputProps {
  fieldProps: FieldProps;
}

const InputField: React.FunctionComponent<IInputFieldProps> = (props) => {
  const { fieldProps, label, ...otherProps } = props;
  const { field, form, meta } = fieldProps;
  const { name } = field;
  const { errors, touched } = form;
  const isValid = Boolean(errors[name] && touched[name]);
  console.log(form);
  return (
    <FormGroup>
      {label && (
        <Label for={name} sm={2}>
          {label}
        </Label>
      )}
      <Col sm={10}>
        <Input id={name} {...field} {...otherProps} invalid={isValid} />
      </Col>
      <ErrorMessage name={fieldName.title} />
    </FormGroup>
  );
};

export default InputField;
