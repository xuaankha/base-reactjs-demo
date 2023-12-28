import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  //JSX
  state = {
    listUsers: [
      { id: 1, name: "Kha0", age: "30" },
      { id: 2, name: "Kha1", age: "31" },
      { id: 3, name: "Kha2", age: "32" },
    ],
  };
  render() {
    // const { listUsers } = this.props;
    //const listUsers = this.props.listUsers;
    // const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <UserInfo /> 
        <hr />
        <br />
        <DisplayInfo
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        />
        <hr />
      </div>
    );
  }
}
export default MyComponent;
