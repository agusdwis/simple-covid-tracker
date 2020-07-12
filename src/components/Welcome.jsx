import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="WelContainer">
      <div className="container welcome d-flex justify-content-center align-items-center">
        <div className="d-block">
          <h2 className="mb-5">
            Welcome to the <br />
            <strong>Southeast Asia Corona Counter</strong>
          </h2>
          <Link to="/covid">
            <button type="button" className="btn welButton">
              Click here to see the data
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
