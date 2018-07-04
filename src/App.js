import React, { Component } from "react";
import LectureGoalList from "./components/LectureGoalList";

import logo from "./logo.svg";
import "./App.css";

const goals = [
  "1. react 개발에 필요한 환경을 구축한다.",
  "2. react 개발에 필요한 Javascript를 구축한다.",
  "3. react 개발에 필요한 IDE를 읽힌다."
];

class App extends Component {
  handleClick(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.handleClick}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">hello to React</h1>
        </header>
        <p className="App-intro">
          To , edit <code>src/App.js</code> and save to reload.
        </p>

        <LectureGoalList items={goals} title={"강의목표!!!"} />
      </div>
    );
  }
}

export default App;
