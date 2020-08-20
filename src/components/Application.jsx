import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Problem from "./Problem"
import FixBlock from "./FixBlock";
import ButtonChange from "./ButtonChange"

class Application extends Component {
  componentDidMount() {
    document.title = "React Screening";
  }
  render() {
    return (
     <Router>
       <Route exact path="/" component={Problem} />
       <Route exact path="/problem-1" component={ButtonChange} />
       <Route exact path="/problem-2" component={FixBlock} />
     </Router>
    );
  }
}

export default Application;
