import { Component } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import "./Pager.css";

class Pager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPages: 20,
      pageSize: 10,
      currentPage: 1
    };
  }

  // Sets current page state to input value
  updatePageState = (e) => {
    const buttonClicked = e.target.textContent;
    let newPageValue = this.state.currentPage;

    //Determine if previous, next, or a numbered button was clicked and set value accordingly
    if (buttonClicked === "<") {
      newPageValue--;
    } else if (buttonClicked === ">") {
      newPageValue++;
    } else {
      newPageValue = buttonClicked;
    }

    this.setState((prevState) => ({
      currentPage: newPageValue
    }));
  };

  //Updates pager component with user input settings
  updatePager = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      totalPages: e.target[0].value,
      pageSize: e.target[1].value
    }));
  };

  render() {
    //Create buttons for rendering
    const createButtons = () => {
      //Calculate range of buttons to show based on current page number and page size setting
      // Note max page size is the pagination size aka how many page buttons are shown at once
      const buttonRange = Math.floor(this.state.pageSize / 2);
      let lowestShownButton,
        highestShownButton = 0;
      let buttons = [];
      let currentPage = parseInt(this.state.currentPage);
      let maxPageSize = parseInt(this.state.pageSize);
      let totalPages = parseInt(this.state.totalPages);

      //Calculate lowest button shown factoring in range
      if ((currentPage - buttonRange) >= 1) {
        lowestShownButton = currentPage - buttonRange;
        if (maxPageSize % 2 === 0) lowestShownButton++;
      } else {
        lowestShownButton = 1;
      }

      //Calculate highest button shown factoring in range
      if ((currentPage + buttonRange) < totalPages) {
        highestShownButton = currentPage + buttonRange;
      } else {
        highestShownButton = totalPages;
      }

      //Make sure size is still equal to page size setting when close to upper and lower bound
      if ((currentPage <= buttonRange) && maxPageSize <= totalPages) {
        highestShownButton = maxPageSize;
      }

      if ((currentPage + buttonRange) > totalPages) {
        lowestShownButton = totalPages - maxPageSize + 1;
        if (lowestShownButton <= 0) lowestShownButton = 1;
      }
      

      for (let i = lowestShownButton; i <= highestShownButton; i++) {
        if (i === currentPage) {
          buttons.push(
            <Button
              className="Btn-selected Default-button"
              text={i}
              onClick={this.updatePageState}
            ></Button>
          );
        } else {
          buttons.push(
            <Button text={i} onClick={this.updatePageState}></Button>
          );
        }
      }
      return buttons;
    };

    return (
      <>
        <form onSubmit={this.updatePager}>
          <label htmlFor="totalPages">Total Pages: </label>
          <Input
            name="totalPages"
            defaultValue={this.state.totalPages}
            type="number"
          ></Input>
          <label htmlFor="pageSize">Pagination Size: </label>
          <Input
            name="pageSize"
            defaultValue={this.state.pageSize}
            type="number"
          ></Input>
          <Button text="Update"></Button>
        </form>
        <Panel>
          <Button text="<" onClick={this.updatePageState} disabled={parseInt(this.state.currentPage) === 1}></Button>
          {createButtons()}
          <Button text=">" onClick={this.updatePageState} disabled={this.state.currentPage === this.state.totalPages}></Button>
        </Panel>
      </>
    );
  }
}

export default Pager;
