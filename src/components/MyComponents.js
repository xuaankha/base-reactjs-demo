import React from "react";
class MyComponent extends React.Component {
  //JSX
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
  handleonMoverOver(event) {
    // console.log(event);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.age}
        <button onMouseOver={this.handleonMoverOver}>
          Click me onMouseOver
        </button>
        <button onClick={this.handleClick}>Click me onClick</button>
        {/* có thể gọi arrow function vào this.handleClick luon
        (event) => {
            this.handleClick(event);
          } */}
      </div>
    );
  }
}
export default MyComponent;
