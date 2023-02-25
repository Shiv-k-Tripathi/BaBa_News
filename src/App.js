import "./App.css";
import React, { Component, createContext } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { Switch, Route } from "react-router-dom";
import Sports from "./component/Sports";
import Contact from "./component/Contact";
import Entertainment from "./component/Entertainment";

export const UserContext = createContext();
var user = "Shiv";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text1: "",
    };
  }
  show = (data) => {
    this.setState({ text1: this.data });
  };
  render() {
    return (
      <>
        <UserContext.Provider value={user}>
          {this.state.text1}
          <Navbar />
          <Switch>
            <Route exact path="/" component={News} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/entertainment" component={Entertainment} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </UserContext.Provider>
      </>
    );
  }
}
