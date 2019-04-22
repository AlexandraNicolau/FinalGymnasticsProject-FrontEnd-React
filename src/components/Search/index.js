import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.onChange}
          type="search"
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Search;
