import { PhotoList } from "components/photoList/PhotoList";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { deletePhoto } from "reducers/photoSlice";
import { RootState } from "store/store";
import Banner from "../../components/banner/Banner";
import Images from "../../constants/images";
import "./style.scss";

export interface IMainPagePhotoProps {}

export function MainPagePhoto(props: IMainPagePhotoProps) {
  const listPhoto = useSelector((state: RootState) => state.photos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onPhotoEditClick = (id: number) => navigate(`/photos/edit/${id}`);
  const onPhotoRemoveClick = (id: number) => dispatch(deletePhoto(id));
  return (
    <Container className="text-center">
      <div className="main-page-photo">
        <Banner url={Images.PINK_BG} title="Your awsome photos" />
        <Link to="/photos/add">Add Photo</Link>
      </div>
      <PhotoList
        listPhoto={listPhoto}
        onPhotoEditClick={onPhotoEditClick}
        onPhotoRemoveClick={onPhotoRemoveClick}
      />
    </Container>
  );
}
