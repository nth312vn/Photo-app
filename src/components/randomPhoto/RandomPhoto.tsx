import { ClientRequest } from "http";
import * as React from "react";
import { Button, Col } from "reactstrap";
import { getImages } from "services/getImages";

export interface IRandomPhotoProps {
  name: string;
  imageUrl: string;
  onImageUrlChange: (newUrl: string) => void;
  onRandomImageBlur: (e: React.FocusEvent<any, Element>) => void;
}

export function RandomPhoto(props: IRandomPhotoProps) {
  const { name, imageUrl, onImageUrlChange, onRandomImageBlur } = props;
  const handleGetNewImg = async () => {
    onImageUrlChange(
      `https://picsum.photos/600/400/?random&rnd${new Date().getTime()}`
    );
  };

  return (
    <>
      <Col sm={15}>
        <Button
          name={name}
          onClick={handleGetNewImg}
          onBlur={onRandomImageBlur}
          outline
          color="primary"
          className="mb-5"
        >
          Random the photo
        </Button>
      </Col>
      <Col sm={10}>
        <img
          src={imageUrl}
          width={600}
          height={400}
          onError={handleGetNewImg}
        />
      </Col>
    </>
  );
}
