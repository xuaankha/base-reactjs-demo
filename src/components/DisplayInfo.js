import React from "react";
class DisplayInfo extends React.Component {
  render() {
    //props => viết tat properties

    const { listUsers } = this.props;

    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div> My name's {user.name} </div>
              <div>My age's {user.age} </div>
            </div>
          );
        })}
        {/* <div>My Age's: {this.props.name}</div>
        <div>My Name's: {this.props.age}</div> */}
      </div>
    );
  }
}
export default DisplayInfo;
