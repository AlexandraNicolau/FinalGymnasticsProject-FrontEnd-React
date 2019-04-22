import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // search: "",
      gymnasts: []
      // filteredGymnasts: []
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
  // onChange = e => {
  //   const searchTerm = e.target.value;
  //   const filteredGymnasts = this.state.gymnasts;
  //   filteredGymnasts.filter(gymnast => {
  //     console.log(gymnast.firstName);
  //     return gymnast.firstName.indexOf(searchTerm) > -1;
  //   });
  //   this.setState({
  //     search: searchTerm,
  //     filteredGymnasts: filteredGymnasts
  //   });
  // };
  render() {
    return (
      <div>
        {/* <Search onChange={this.onChange} value={this.state.search} /> */}
        <List
          gymnasts={
            // this.state.filteredGymnasts.length
            //   ? this.state.filteredGymnasts
            //   :
            this.state.gymnasts
          }
        />
      </div>
    );
  }
}

export default App;
