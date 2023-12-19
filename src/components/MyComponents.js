import React from "react";
class MyComponent extends React.Component {
  //JSX
  state = {
    name: "Kha",
    address: "TP HCM",
    age: 26,
  };
  handleClick(event) {
    // console.log("Click me");
    console.log("My name is", this.state.name);
  }
  handleonMoverOver(event) {
    console.log(event);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver={this.handleonMoverOver}>
          Click me onMouseOver
        </button>
        <button onClick={this.handleClick}>Click me onClick</button>
      </div>
    );
  }
}
export default MyComponent;
