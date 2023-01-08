import PhotoCard from "components/photoCard/PhotoCard";
import { IPhotoForm } from "components/photoFom/PhotoForm";
import * as React from "react";
import { Col, Row } from "reactstrap";

export interface IPhotoListProps {
  listPhoto: IPhotoForm[];
  onPhotoEditClick: (id: number) => void;
  onPhotoRemoveClick: (id: number) => void;
}

export function PhotoList(props: IPhotoListProps) {
  const { listPhoto, onPhotoEditClick, onPhotoRemoveClick } = props;
  return (
    <>
      <Row>
        {listPhoto.map((item) => {
          return (
            <Col key={item.title} xs="12" md="6" lg="3">
              <PhotoCard
                photo={item}
                onEditClick={onPhotoEditClick}
                onRemoveClick={onPhotoRemoveClick}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
