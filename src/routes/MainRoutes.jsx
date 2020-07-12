import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import CovidPage from "../pages/CovidPage";
import News from "../pages/NewsPage";
import NotMatch from "../pages/NotMatch";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/covid" component={CovidPage} />
          <Route path="/covid-news/:category" component={CovidPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/news" component={News} />
          <Route component={NotMatch} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
