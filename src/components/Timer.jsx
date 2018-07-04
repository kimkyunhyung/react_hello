import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nTimer = setInterval(this.handleTick, 1000);
  }

  handleTick = () => {
    console.log(this.nTime);
    this.forceUpdate();
  };

  render() {
    console.log("rener...");
    return (
      <div>
        <div>현재시간: {moment().format("YYYY-MM-DD A hh:mm")}</div>
        <div>
          강의종료시간 {moment(this.props.expireDate).fromNow()}에 강의
          종료합니다.
        </div>
      </div>
    );
  }
}

export default Timer;
