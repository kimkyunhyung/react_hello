import React, { Component } from "react";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import Header from "./components/Header";

import { Input } from "antd";

import logo from "./logo.svg";
import moment from "moment";

import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";

const goals = [
  { title: "1. react 개발에 필요한 환경을 구축한다.", completed: true },
  { title: "2. react 개발에 필요한 Javascript를 구축한다.", completed: true },
  { title: "3. react 개발에 필요한 IDE를 읽힌다.", completed: true },
  { title: "4. react 개발에 필요한 IDE를 읽힌다.", completed: true }
];

class App extends Component {
  state = {
    data: [],
    isExpired: false,
    dateStr: "2018-07-05T17:00:00+09:00"
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    //debugger;
    console.log(e);
  }

  handleComplete = () => {
    this.setState({ isExpired: true });
    console.log("타이머로부터 호출 받음");
  };

  componentDidMount() {
    axios.get("http://api.tvmaze.com/search/shows?q=girls").then(({ data }) => {
      this.setState({ data });
    });

    setInterval(() => {
      this.setState({
        dateStr: "2018-07-05T16:00:00+09:00"
      });
    }, 5000);
  }
  render() {
    console.log("부모랜더");
    //const isExpired = moment("2018-07-04T16:00:00+09:00") < moment();
    const { isExpired } = this.state;

    return (
      <div className="App">
        <Header />
        {/*       <header className="App-header">
          <img
            onClick={this.handleClick}
            src={logo}
            className="App-logo rotate"
            alt="logo"
          />
          <h1 className="App-title">hello to React</h1>
        </header>
    */}
        <br />
        <Todos items={goals} title={"강의목표!!!"} />
        {!isExpired && (
          <Timer
            key={this.state.dateStr}
            expireDate={this.state.dateStr}
            //onComplete={this.handleComplete}
            onComplete={this.handleClick}
          />
        )}

        <img src={this.state.data} alt="TEST" />
      </div>
    );
  }
}

export default App;
