import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  //JSX
  state = {
    listUsers: [
      { id: 1, name: "Kha0", age: "15" },
      { id: 2, name: "Kha1", age: "26" },
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

        <br />

        <DisplayInfo
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        />
      </div>
    );
  }
}
export default MyComponent;
