import React, { Component } from "react";
import { Checkbox, Input, Icon } from "antd";
import "./Todos.less";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...props.items]
    };
  }

  handlePress = e => {
    const { items } = this.state;
    items.push({
      title: e.target.value,
      completed: false
    });
  };

  handleDelete(e, item, idx) {
    let { items } = this.state;

    items = items.splice(idx, 1);

    this.setState({
      items: [...items]
    });
  }

  render() {
    const { title, items } = this.props;
    return (
      <div className="Todos">
        <div> {title} </div>
        <Input OnPressEnter={this.handlePress} />

        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <Icon className="icon" type="delete" />
              <Checkbox defaultChecked={item.completed}>{item.title}</Checkbox>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
