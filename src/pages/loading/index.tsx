import React from "react";
import "./style.scss";

const LoadingPage: React.FC = () => {
  return (
    <div className="loading-page">
      <div className="loading-icon">
        <i className="fa fa-spinner fa-spin" />
      </div>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
