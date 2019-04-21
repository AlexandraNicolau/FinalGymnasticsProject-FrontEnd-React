import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gymnasts: []
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3000/gymnasts");
      const data = await response.json();
      this.setState({ gymnasts: data.data.gymnasts });
      console.log(data);
    } catch (err) {
      console.log("This is an error trying to get the data");
    }
  }

  render() {
    return (
      <div>
        {this.state.gymnasts.map((item, idex) => (
          <div>
            {item.firstName} {item.lastName}
          </div>
        ))}
      </div>
    );
  }
}

export default List;
