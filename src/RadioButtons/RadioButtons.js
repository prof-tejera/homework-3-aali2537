import { Component } from "react";
import Button from "components/Button/Button";
import Panel from "components/Panel/Panel";
import "./RadioButtons.css";

class RadioButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["Apple", "Pear", "Orange"],
      currentlySelected: "Apple",
      disabled: { Orange: true }
    };
  }

  clickHandler = (e) => {
    this.setState((prevState) => ({
      currentlySelected: e.target.textContent
    }));
  };

  render() {
    return (
      <Panel>
        {this.state.options.map((option) => {
          let buttonClass = "Default-button";
          let buttonDisabled = false;

          if (option === this.state.currentlySelected) {
            buttonClass = "Default-button Btn-Selected";
          }

          if (this.state.disabled[option]) {
            buttonDisabled = true;
          }

          return (
            <Button
              text={option}
              key={option}
              onClick={this.clickHandler}
              className={buttonClass}
              disabled={buttonDisabled}
            ></Button>
          );
        })}
      </Panel>
    );
  }
}

export default RadioButtons;
