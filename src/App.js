import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import MainPage from "./MainPage";
class App extends Component {
  state = {
    show: true,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({show: false})
    // },5000);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
