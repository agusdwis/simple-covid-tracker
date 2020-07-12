import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import {doLogout} from "../store/actions/actionUser";
import {connect} from "react-redux";
const Navigation = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="App-logo"
              src={require("../images/logo.png")}
              style={{ width: "4vmax", height: "auto" }}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/profile">
                  Profile
                </Link>
              </li>
              {props.login ?
                  <li className="nav-item">
                    <Link onClick={props.doLogout} className="nav-link text-white" to="/signin">
                      Logout
                    </Link>
                  </li>
                  :
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/signin">
                      Login
                    </Link>
                  </li>
              }
              <li className="nav-item">
                <Link className="nav-link text-white" to="/news">
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
  };
};

const mapDispatchToProps = { doLogout};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
