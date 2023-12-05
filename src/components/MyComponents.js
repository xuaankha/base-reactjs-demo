import React from "react";
class MyComponent extends React.Component {
  //JSX
  state = {
    name: "Kha",
    address: "TP HCM",
    age: 26,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
