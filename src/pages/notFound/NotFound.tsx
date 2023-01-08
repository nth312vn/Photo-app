import * as React from "react";
import "./style.scss";
export interface IAppProps {}

export default function NotFound(props: IAppProps) {
  return (
    <div className="not-found-page">
      <h1>404 Not Found</h1>
      <p>The requested resource was not found on the server.</p>
    </div>
  );
}
