import { Col, Button, FormGroup } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../constants/options";
import Images from "constants/images";
import { Formik, FormikProps, Form, FastField, FieldProps } from "formik";
import InputField from "components/inputField/InputField";
import SelectField from "components/selectField/SelectFiled";
import { fieldName } from "constants/form";
import { RandomPhotoField } from "components/randomPhotoField/RandomPhotoField";
import * as yup from "yup";

export interface IPhotoFormProps {
  onSubmit: (value: IPhotoForm) => void;
  initialValue: IPhotoForm;
}
export interface IPhotoForm {
  [fieldName.id]: number;
  [fieldName.title]: string | undefined;
  [fieldName.category]: number | null;
  [fieldName.photo]: string | undefined;
}

export default function PhotoForm(props: IPhotoFormProps) {
  const initialValues: IPhotoForm = props.initialValue;
  const validationObj = yup.object().shape({
    [fieldName.title]: yup.string().required("This field is required"),
    [fieldName.category]: yup
      .number()
      .required("This field is required")
      .nullable(),
    [fieldName.photo]: yup.string().required("This field is required"),
  });
  console.log(validationObj);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationObj}
    >
      {(props: FormikProps<IPhotoForm>) => (
        <Form>
          <FastField name={fieldName.title}>
            {(fieldProps: FieldProps) => {
              return (
                <InputField
                  fieldProps={fieldProps}
                  placeholder="with a placeholder"
                  label="Title"
                  type="text"
                />
              );
            }}
          </FastField>
          <FastField name={fieldName.category}>
            {(fieldProps: FieldProps) => {
              return (
                <SelectField
                  fieldProps={fieldProps}
                  options={PHOTO_CATEGORY_OPTIONS}
                  label="Category"
                />
              );
            }}
          </FastField>
          <FastField name={fieldName.photo}>
            {(fieldProps: FieldProps) => {
              return <RandomPhotoField fieldProps={fieldProps} label="Photo" />;
            }}
          </FastField>

          <FormGroup>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button type="submit" className="mt-5" color="primary">
                Add to Album{" "}
              </Button>
            </Col>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}
