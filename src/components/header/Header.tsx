import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export interface IAppProps {}

export default function Header(props: IAppProps) {
  return (
    <div className="header">
      <div>
        <Link className="header-link" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="header-link" to="/photos">
          Photo
        </Link>
      </div>
    </div>
  );
}
