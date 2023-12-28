import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Kha",
    address: "TP HCM",
    age: 26,
  };
  handleClick = (event) => {
    // console.log("Click me");
    console.log("My name is", this.state.name);
    console.log("Random", Math.floor(Math.random() * 100) + 1);
    this.setState({
      name: "Kha Pro",
    });
  };
  handleOnMoverOver(event) {
    // console.log(event);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfo;
