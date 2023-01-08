import Images from "./images";

export enum fieldName {
  id = "id",
  title = "title",
  category = "category",
  photo = "photo",
}
export const initFormValue = {
  [fieldName.title]: "",
  [fieldName.category]: null,
  [fieldName.photo]: Images.COLORFUL_BG,
  [fieldName.id]: Math.random() * 1000,
};
