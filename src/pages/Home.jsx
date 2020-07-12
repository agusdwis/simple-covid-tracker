import React from "react";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
// import SignIn from "../components/SignInComp";
// import Profile from "../components/Profile";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.dataUser.is_login ? (
          <React.Fragment>
            <div>
              <Navigation {...this.props}/>
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <Welcome />
                </div>
              </div>
              {/* <SignIn /> */}
              {/* <Profile /> */}
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

export default connect(mapStateToProps)(Home);
