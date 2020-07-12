import React from "react";
import "../css/style.css";


const Footer = () => {
  return (
    <footer class="page-footer container my-5">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6 text-white text-left">
            <p className="footer-text">
              <strong>Southeast Asia Corona Counter</strong>
            </p>
            <p className="footer-text">
              Karya Agus Dwi Sasongko, Ana Shofiya Kurniawati, Syah Rizal
              Pamungkas.
            </p>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
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
          <div class="col-md-3 mb-md-0 mb-3">
            <p class="text-white footer-text">Kebijakan privasi</p>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-white text-center py-3">
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
