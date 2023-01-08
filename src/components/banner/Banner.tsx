import React from "react";
import "./style.scss";
export interface IBannerProps {
  url: string;
  title: string;
}

export default function Banner(props: IBannerProps) {
  const { url = "", title = "" } = props;
  const style = {
    backgroundImage: `url(${url})`,
  };
  return (
    <div className="banner" style={style}>
      <p className="banner-title">{title}</p>
    </div>
  );
}
