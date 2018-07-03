import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const goals = [
  "1. react 개발에 필요한 환경을 구축한다.",
  "2. react 개발에 필요한 환경을 구축한다.",
  "3. react 개발에 필요한 IDE를 읽힌다."
];

const LectureGoalList = props => {
  return (
    <div>
      <div> {props.title} </div>
      <ul>{props.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
