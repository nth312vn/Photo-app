import { RandomPhoto } from "components/randomPhoto/RandomPhoto";
import { fieldName } from "constants/form";
import { ErrorMessage, FieldProps } from "formik";
import React from "react";
import { Label } from "reactstrap";

export interface IRandomPhotoFieldProps {
  label: string;
  fieldProps: FieldProps;
}

export function RandomPhotoField(props: IRandomPhotoFieldProps) {
  const { label, fieldProps } = props;
  const { field, form, meta } = fieldProps;
  const { name, value, onBlur } = field;
  const handleChangeImageUrl = (newUrl: string) => {
    form.setFieldValue(name, newUrl);
  };
  return (
    <>
      <Label for="exampleSelect" sm={2}>
        {label}
      </Label>
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleChangeImageUrl}
        onRandomImageBlur={onBlur}
      />
      <ErrorMessage name={fieldName.photo} />
    </>
  );
}
