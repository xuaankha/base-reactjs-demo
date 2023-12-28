import React from "react";
class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    //props => viết tat properties
    const { listUsers } = this.props;
    return (
      <div>
        <div>
          {" "}
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Show List User:"
              : "Hide List User:"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                  <div> My name's {user.name} </div>
                  <div>My age's {user.age} </div>
                  <hr />
                </div>
              );
            })}
            {/* <div>My Age's: {this.props.name}</div>
        <div>My Name's: {this.props.age}</div> */}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
