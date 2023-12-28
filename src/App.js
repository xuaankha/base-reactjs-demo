import "./App.css";
import MyComponent from "./components/MyComponents";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Kha
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;
