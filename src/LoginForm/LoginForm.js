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

  render() {
    const handlers = {
      formSubmit: (e) => {
        e.preventDefault();

        this.setState((prevState) => ({
          username: "",
          password: ""
        }));

        console.log(
          `Login submitted and input fields cleared! Username: ${this.state.username} | Password: ${this.state.password}`
        );
      },
      usernameChange: (e) => {
        this.setState((prevState) => ({
          username: e.target.value
        }));
      },
      passwordChange: (e) => {
        this.setState((prevState) => ({
          password: e.target.value
        }));
      }
    };

    return (
      <Panel>
        <form onSubmit={handlers.formSubmit}>
          <Input
            placeholder="Username"
            handler={handlers.usernameChange}
            value={this.state.username}
            type="text"
          ></Input>
          <Input
            placeholder="Password"
            handler={handlers.passwordChange}
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
