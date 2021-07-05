import React, { Component } from "react";

import Header from "../components/Navigation";

import { doLogin, changeInputUser } from "../store/actions/actionUser";

import { connect } from "react-redux";
import Footer from "../components/Footer";

class SignIn extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login || localStorage.getItem("isLogin");
    if (is_login) {
      this.props.history.push("/profile");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="signin container d-flex justify-content-center align-items-center my-5">
          <div className="d-block">
            <h2 className="text-white">Sign In</h2>
            <form onSubmit={(el) => el.preventDefault()}>
              <div className="form-group text-left">
                <label
                  className="text-white"
                  htmlFor="exampleFormControlInput1"
                >
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="namaPengguna"
                  placeholder="Username"
                  onChange={(el) => this.props.changeInput(el)}
                  required
                />
              </div>
              <div className="form-group text-left">
                <label
                  className="text-white"
                  htmlFor="exampleFormControlInput2"
                >
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="kataKunci"
                  placeholder="Password"
                  onChange={(el) => this.props.changeInput(el)}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  onClick={() => this.postLogin()}
                  type="submit"
                  className="btn btnSignin btn-block"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
