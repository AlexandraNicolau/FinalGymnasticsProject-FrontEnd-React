import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.gymnasts.map((item, idex) => (
          <div>
            {item.firstName} {item.lastName}
          </div>
        ))}
      </div>
    );
  }
}

export default List;
