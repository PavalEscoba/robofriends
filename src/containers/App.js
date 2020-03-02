import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
// import Scroll from './Scroll';
import CardList from "../components/CardList";
import { Scrollbars } from "react-custom-scrollbars";
import ErrorBoundary from "../components/ErrorBoundary";

// import robots from "./robots";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="f1"> LOADING ... </h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {/* <Scroll> */}
        <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={500}>
          
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scrollbars>
        {/* </Scroll> */}
      </div>
    );
  }
}

export default App;
