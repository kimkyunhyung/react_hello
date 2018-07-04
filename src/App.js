import React, { Component } from "react";
import LectureGoalList from "./components/LectureGoalList";
import Timer from "./components/Timer";
import moment from "moment";

import logo from "./logo.svg";
import "./App.css";

const goals = [
  "1. react 개발에 필요한 환경을 구축한다.",
  "2. react 개발에 필요한 Javascript를 구축한다.",
  "3. react 개발에 필요한 IDE를 읽힌다."
];

class App extends Component {
  state = {
    isExpired: false
  };

  handleClick(e) {
    //debugger;
    console.log(e);
  }

  handleComplete() {
    this.setState({ isExpired: true });
    console.log("타이머로부터 호출 받음");
  }

  render() {
    //const isExpired = moment("2018-07-04T16:14:00+09:00") < moment();
    const { isExpired } = this.state;

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
        {!isExpired && (
          <Timer
            expireDate={"2018-07-04T16:20:00+09:00"}
            onComplete={this.handleComplete}
          />
        )}
      </div>
    );
  }
}

export default App;
