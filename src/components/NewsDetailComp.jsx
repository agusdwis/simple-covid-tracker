import React, { Fragment } from "react";
import "../css/style.css";
const NewsDetailComp = (props) => {
  const { title, author, description, publish, url } = props;

  return (
    <Fragment>
      <div className="container news mb-3 d-flex align-items-center row">
        <div className="gambar col-lg-1-2 row-sm-12">
          <img
            className="App-logo"
            src={require("../images/logo.png")}
            style={{ width: "6vmax", height: "auto" }}
            alt="logo"
          />
        </div>
        <div className="text-left ml-3 text-white col-lg-10 row-sm-12">
          <a href={url} className="text-white">
            <h4>
              <strong style={{ color: "#e43f5a" }}>{title}</strong>
            </h4>
          </a>
          <p>{description}</p>
          <br />
          <p>Writer : {author}</p>
          <p>Published at {publish.slice(0, 10)}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsDetailComp;
