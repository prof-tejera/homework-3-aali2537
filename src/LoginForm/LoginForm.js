import { Component } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  // Prints username and password to console on form submission and clears fields
  formSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      username: "",
      password: ""
    }));

    console.log(
      `Login submitted and input fields cleared! Username: ${this.state.username} | Password: ${this.state.password}`
    );
  };

  //Updates state with current username value
  usernameChange = (e) => {
    this.setState((prevState) => ({
      username: e.target.value
    }));
  };

  //Update state with current password value
  passwordChange = (e) => {
    this.setState((prevState) => ({
      password: e.target.value
    }));
  };

  render() {
    return (
      <Panel>
        <form onSubmit={this.formSubmit}>
          <Input
            placeholder="Username"
            handler={this.usernameChange}
            value={this.state.username}
            type="text"
          ></Input>
          <Input
            placeholder="Password"
            handler={this.passwordChange}
            value={this.state.password}
            type="password"
          ></Input>
          <Button text="Login"></Button>
        </form>
      </Panel>
    );
  }
}

export default LoginForm;
