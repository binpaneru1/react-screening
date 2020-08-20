import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
 
  buttonTwoHandleClick() {
    const { colors } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    if (this.state.bgColor === "green") {
      this.setState({ bgColor: "blue" });
    } else {
      this.setState({ bgColor: color });
    }
  }

  componentDidMount() {
    document.title = "React Screening";
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/problem-1">
            <h1>Problem 1</h1>
          </Link>
        </div>
        <div>
          <Link to="/problem-2">
            <h1>Problem 2</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
