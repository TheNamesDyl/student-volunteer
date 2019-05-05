import React, { Component } from "react";
import Eventcontainer from "./Eventcontainer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = [
      {
        image:
          "https://projectdelivery.autodesk.com/blog/wp-content/uploads/2017/10/disrupting-civil-infrastructure-opportunities-iot-cloud-automation.jpg",
        title: "Create tool to make B2G market efficient/productive",
        description: "Civic Infrastructure",
        moreDescription: "Create service to make B2G market more productive.",
        skills: ["Front-end developer", "Back-end developer", "UX designer"],
        thirdDescription: `We wondered why it was so hard to find out what is happening in Seattle City Council for a specific topic, so we set out to solve that. Let's make city councils actions and activities more discoverable. The first step to this is basic data processing: automated transcript creation for city council events, indexing those transcripts, and finally making them available on the web via our website and database.\
        But what more can we do? Add more cities to the system? What about visualizations about topics covered by the city council? How about building predictive models for city council decisions and actions? Or even, summarizing city council member positions on topics? All of these and more are projects we are curious about, but if you have your own ideas we are glad to hear them.`
      },
      {
        image:
          "https://democracylab-marlok.s3.amazonaws.com/thumbnails%2Fmark%40democracylab.org%2Fdl_idnty_node_mark.png_1517778401.9664516.png",
        title: "Democracy Lab",
        description: "Civic Infrastructure",
        moreDescription:
          "Building online infrastructure to empower the civic tech movement. Our initial iteration connects volunteers to tech-for-good projects.",
        skills: ["Full stack developer", "Back end developer", "Marketing"],
        thirdDescription: `We wondered why it was so hard to find out what is happening in Seattle City Council for a specific topic, so we set out to solve that. Let's make city councils actions and activities more discoverable. The first step to this is basic data processing: automated transcript creation for city council events, indexing those transcripts, and finally making them available on the web via our website and database.\
        But what more can we do? Add more cities to the system? What about visualizations about topics covered by the city council? How about building predictive models for city council decisions and actions? Or even, summarizing city council member positions on topics? All of these and more are projects we are curious about, but if you have your own ideas we are glad to hear them.`
      },
      {
        image:
          "https://democracylab-marlok.s3.amazonaws.com/thumbnails%2Fsveirs%40gmail.com%2Forca-dorsal-spray-square.png_1537376768.1992114.png",
        title: "Orcasound - Listen for whales",
        description: "Environment",
        moreDescription:
          "Help perfect a web-app that lets users listen for whales and act to conserve them.",
        skills: ["UX Designer", "Data Analyst", "Data Architect"],
        thirdDescription: `We wondered why it was so hard to find out what is happening in Seattle City Council for a specific topic, so we set out to solve that. Let's make city councils actions and activities more discoverable. The first step to this is basic data processing: automated transcript creation for city council events, indexing those transcripts, and finally making them available on the web via our website and database.\
        But what more can we do? Add more cities to the system? What about visualizations about topics covered by the city council? How about building predictive models for city council decisions and actions? Or even, summarizing city council member positions on topics? All of these and more are projects we are curious about, but if you have your own ideas we are glad to hear them.`
      },
      {
        image:
          "https://democracylab-marlok.s3.amazonaws.com/thumbnails%2Fbenjamindonan%40gmail.com%2Fculture-shocks-logo%404x.png_1542500870.0934994.png",
        title: "Culture Shocks",
        description: "Cultural issues",
        moreDescription:
          "A mobile app to help international students overcome culture shock and develop cross-cultural competence .",
        skills: ["Social Justice", "Education", "Cultural Issues"],
        thirdDescription: `We wondered why it was so hard to find out what is happening in Seattle City Council for a specific topic, so we set out to solve that. Let's make city councils actions and activities more discoverable. The first step to this is basic data processing: automated transcript creation for city council events, indexing those transcripts, and finally making them available on the web via our website and database.\
        But what more can we do? Add more cities to the system? What about visualizations about topics covered by the city council? How about building predictive models for city council decisions and actions? Or even, summarizing city council member positions on topics? All of these and more are projects we are curious about, but if you have your own ideas we are glad to hear them.`
      },
      {
        image:
          "https://democracylab-marlok.s3.amazonaws.com/thumbnails%2Fjmaxfieldbrown%40gmail.com%2Fcdp-icon.png_1556163076.8668606.png",
        title: "Council Data Project",
        description: "Civic Infrastructure",
        moreDescription:
          "Making city council activity discoverable and understandable by more than just reporters and legislators.",
        skills: ["Front-End developer", "UX Designer", "Data visualization"],
        thirdDescription: `We wondered why it was so hard to find out what is happening in Seattle City Council for a specific topic, so we set out to solve that. Let's make city councils actions and activities more discoverable. The first step to this is basic data processing: automated transcript creation for city council events, indexing those transcripts, and finally making them available on the web via our website and database.\
        But what more can we do? Add more cities to the system? What about visualizations about topics covered by the city council? How about building predictive models for city council decisions and actions? Or even, summarizing city council member positions on topics? All of these and more are projects we are curious about, but if you have your own ideas we are glad to hear them.`
      }
    ];
    var indents = [];
    for (var i = 0; i < 30; i++) {
      indents.push(<Eventcontainer data={data[i % 5]} key={i} />);
    }
    return <React.Fragment>{indents}</React.Fragment>;
  }
}

export default Home;
