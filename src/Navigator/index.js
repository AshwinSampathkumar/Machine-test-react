// Packages
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import Dashboard from "../Pages/Dashboard/index";
import ClientManagement from "../Pages/ClientManagement/index";

class Navigator extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/client-management" component={ClientManagement} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigator