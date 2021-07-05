import React from "react";
import "../css/style.css";

const Footer = () => {
  return (
    <footer className="page-footer container my-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 text-white text-left">
            <p className="footer-text">
              <strong>Southeast Asia Corona Counter</strong>
            </p>
            <p className="footer-text">Alterra Academy</p>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <img
              src={require("../images/fb.png")}
              alt="fb"
              className="icon-socmed mr-3"
            />
            <img
              src={require("../images/ig.png")}
              alt="fb"
              className="icon-socmed mr-3"
            />
            <img
              src={require("../images/twitter.png")}
              alt="fb"
              className="icon-socmed"
            />
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <p className="text-white footer-text">Kebijakan privasi</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-white text-center py-3">
        <span className="footer-text">
          © 2020 Copyright:
          <a href="/" className="text-white text-decoration-none">
            {" "}
            ASASUGAFI
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
