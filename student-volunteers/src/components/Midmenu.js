import React, { Component } from "react";
import Eventcontainer from "./Eventcontainer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = [
      {
        title: "Create tool to make B2G market efficient/productive",
        description: "Civic Infrastructure",
        moreDescription: "Create service to make B2G market more productive.",
        skills: ["Front-end developer", "Back-end developer", "UX designer"]
      },
      {
        title: "Democracy Lab",
        description: "Civic Infrastructure",
        moreDescription:
          "Building online infrastructure to empower the civic tech movement. Our initial iteration connects volunteers to tech-for-good projects.",
        skills: ["Full stack developer", "Back end developer", "Marketing"]
      },
      {
        title: "t3",
        description: "d3",
        skills: "s3"
      },
      {
        title: "t4",
        description: "d4",
        skills: "s4"
      },
      {
        title: "t5",
        description: "d5",
        skills: "s5"
      },
      {
        title: "t6",
        description: "d6",
        skills: "s6"
      },
      {
        title: "t7",
        description: "d7",
        skills: "s7"
      },
      {
        title: "t8",
        description: "d8",
        skills: "s8"
      },
      {
        title: "t9",
        description: "d9",
        skills: "s9"
      },
      {
        title: "t10",
        description: "d10",
        skills: "s10"
      }
    ];
    var indents = [];
    for (var i = 0; i < data.length; i++) {
      indents.push(<Eventcontainer data={data[i]} key={i} />);
    }
    return <React.Fragment>{indents}</React.Fragment>;
  }
}

export default Home;
