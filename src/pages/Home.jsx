import React from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { checkAuth } from "../store/actions/actionUser";
class Home extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    const isLogin = localStorage.getItem("isLogin");
    return (
      <div>
        {this.props.dataUser.is_login || isLogin ? (
          <React.Fragment>
            <div>
              <Navigation {...this.props} />
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <Welcome />
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { message: "gagal login bro..." },
            }}
          />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  checkAuth: (el) => checkAuth(el),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
