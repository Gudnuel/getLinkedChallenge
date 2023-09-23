import React from "react";
import "./beautifier/not-found.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-main">
      <h1 style={{ color: "greenyellow" }} className="not-head">
        Page Not Found
      </h1>
      <Link to="/" className="not-found-link">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
