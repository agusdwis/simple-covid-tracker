import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/Navigation";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { checkAuth } from "../store/actions/actionUser";

const Profile = (props) => {
  const isLogin = localStorage.getItem("isLogin");
  React.useEffect(() => {
    if (isLogin) {
      props.checkAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.dataUser.is_login && !isLogin) {
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: { message: "gagal login ya.." },
        }}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Header {...props} />
        <div className="container d-flex justify-content-center align-items-center">
          <section className="content">
            <h1
              style={{
                textalign: "center",
              }}
              className="mt-2"
            >
              Profile
            </h1>
            <img
              src={props.dataUser.avatar}
              className="avatar"
              alt="avatar icon"
              style={{ width: "50vmin" }}
            />
            <p className="mt-3">
              <label>Name:</label> {props.dataUser.username}
            </p>
            <p className="mt-3">
              <label>Email:</label> {props.dataUser.email}
            </p>
          </section>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  checkAuth: (el) => checkAuth(el),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
