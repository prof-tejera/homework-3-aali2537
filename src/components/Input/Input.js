import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        onChange={this.props.handler}
        value={this.props.value}
        type={this.props.type}
      ></input>
    );
  }
}

export default Input;
