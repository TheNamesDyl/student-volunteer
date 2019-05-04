import React, { Component } from "react";
import Eventcontainer from "./Eventcontainer";

class Home extends Component {
  render() {
    var indents = [];
    for (var i = 0; i < 10; i++) {
      indents.push(<Eventcontainer key={i} />);
    }
    return <React.Fragment>{indents}</React.Fragment>;
  }
}

export default Home;
