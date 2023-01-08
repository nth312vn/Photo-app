import { IPhotoForm } from "components/photoFom/PhotoForm";
import * as React from "react";
import { Button } from "reactstrap";
import "./style.scss";

interface IPhotoCardProps {
  photo: IPhotoForm;
  onEditClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const PhotoCard: React.FunctionComponent<IPhotoCardProps> = (props) => {
  const { photo, onEditClick, onRemoveClick } = props;
  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button
              outline
              size="sm"
              color="light"
              onClick={() => onEditClick(photo.id)}
            >
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => onRemoveClick(photo.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
