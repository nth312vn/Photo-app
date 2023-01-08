import { fieldName, initFormValue } from "constants/form";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPhoto, editPhoto } from "reducers/photoSlice";
import Banner from "../../components/banner/Banner";
import PhotoForm, { IPhotoForm } from "../../components/photoFom/PhotoForm";
import Images from "../../constants/images";
import "./style.scss";
import { RootState } from "store/store";
interface IAddPhoto {}

const AddPhoto: React.FunctionComponent<IAddPhoto> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const isAddMode = !params;
  const photoEdit =
    useSelector((state: RootState) =>
      state.photos.find((photo) => photo.id === Number(params.id))
    ) || initFormValue;
  console.log("---", photoEdit, params);

  const initialValue = isAddMode ? initFormValue : photoEdit;
  const handleSubmit = (values: IPhotoForm) => {
    dispatch(addPhoto(values));
    navigate("/photos");
  };
  const handleEdit = (value: IPhotoForm) => {
    dispatch(editPhoto(value));
    navigate("/photos");
  };
  return (
    <div className="main-page-photo">
      <Banner url={Images.ORANGE_BG} title="Pick your amazing photos" />
      <div className="form-area">
        <PhotoForm
          onSubmit={isAddMode ? handleSubmit : handleEdit}
          initialValue={initialValue}
        />
      </div>
    </div>
  );
};

export default AddPhoto;
