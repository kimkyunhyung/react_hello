import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cssName: "App-logo rotate",
      Str: ""
    };
  }
  handleClick = () => {
    if (this.state.cssName == "App-logo") {
      this.setState({
        cssName: "App-logo rotate",
        Str: "Rotate"
      });
    }
    if (this.state.cssName == "App-logo rotate") {
      this.setState({
        cssName: "App-logo",
        Str: "Stop"
      });
    }
  };
  render() {
    return (
      <header className="App-header">
        <img
          className={this.state.cssName}
          onClick={this.handleClick}
          src={logo}
          alt="logo"
        />
        <h1 className="App-title">{this.state.Str}</h1>
      </header>
    );
  }
}

export default Header;
