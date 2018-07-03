import React, { Component } from "react";

const styles = {
  textAlign: "left",
  padding: "20px",
  border: "1px solid #ccc",
  margin: "5px"
};

const ulStyles = {
  listStyle: "none"
};

const ListItem = ({ item, index }) => {
  return (
    <li key={index}>
      <label>
        <input type="checkbox" />
        {item}
      </label>
    </li>
  );
};

const LectureGoalList = props => {
  return (
    <div style={styles}>
      <div> {props.title} </div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => {
          return <ListItem item={item} index={idx} />;
        })}
      </ul>
    </div>
  );
};

export default LectureGoalList;
