import React, { Component } from "react";
import "./App.scss";
import { WrongInitials } from "./components/error/error";

export default class App extends Component {
  render() {
    return (
      <div>
        <WrongInitials />
      </div>
    );
  }
}
