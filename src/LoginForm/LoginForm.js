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
    const username = e.target[0].value;
    const password = e.target[1].value;

    console.log(
      `Login submitted and input fields cleared! Username: ${username} | Password: ${password}`
    );

    e.target[0].value = "";
    e.target[1].value = "";
  };

  render() {
    return (
      <Panel>
        <form onSubmit={this.formSubmit}>
          <Input placeholder="Username" name="username"></Input>
          <Input placeholder="Password" type="password" name="password"></Input>
          <Button text="Login"></Button>
        </form>
      </Panel>
    );
  }
}

export default LoginForm;
