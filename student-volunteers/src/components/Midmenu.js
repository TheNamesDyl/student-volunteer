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
        thirdDescription: `The bidding process for contracts is antiquated, fragmented, imprecise, and unwieldy. Because of this, governments collect fewer bids which translates to higher costs to the public.
        Also, there is no web based secondary market that connects prime and subprime vendors. We're creating an easy to use map-based interface that addresses both problems.`
      },
      {
        image:
          "https://democracylab-marlok.s3.amazonaws.com/thumbnails%2Fmark%40democracylab.org%2Fdl_idnty_node_mark.png_1517778401.9664516.png",
        title: "Democracy Lab",
        description: "Civic Infrastructure",
        moreDescription:
          "Building online infrastructure to empower the civic tech movement. Our initial iteration connects volunteers to tech-for-good projects.",
        skills: ["Full stack developer", "Back end developer", "Marketing"],
        thirdDescription: `DemocracyLab is building online infrastructure to empower the civic technology movement. We are creating an online hub for civic innovation that uses marketplace dynamics to allocate effort, resources, and attention. 

        Our initial product seeks to optimize the connection between skilled volunteers and technology-for-good projects. Later offerings will focus on the needs of donors, citizens, and institutions.
        
        The result of our work will be an increase in transparency, participation and collaboration within the civic tech movement. We believe this will spur the evolution of new civic innovations capable of addressing society’s most significant challenges.  
        
        DemocracyLab is a 501(c)(3) nonprofit organization. Our work is rooted in the values of transparency, inclusivity, collaboration, civility and meritocracy. Our platform is built using the MIT Open Source license. `
      },
      {
        image:
          "https://democracylab-marlok.s3.amazonaws.com/thumbnails%2Fsveirs%40gmail.com%2Forca-dorsal-spray-square.png_1537376768.1992114.png",
        title: "Orcasound - Listen for whales",
        description: "Environment",
        moreDescription:
          "Help perfect a web-app that lets users listen for whales and act to conserve them.",
        skills: ["UX Designer", "Data Analyst", "Data Architect"],
        thirdDescription: `Orcasound is a network that connects live hydrophones (underwater microphones) monitoring the habitat of endangered orcas with citizen scientists, educational environmental non-profits, and machine learning algorithms. The new web-based Orcasound app (launched November 1, 2018) makes it easy to listen for whales -- both for their amazing orca sounds and for noise that may be detrimental to them -- by using HTTP Live Streaming (and eventually MPEG-DASH). These formats optimize playback performance over a wide range of browser/device combinations within the Orcasound web-app that plays a live audio stream. [The backend is an Elixir app using the Phoenix framework. The Phoenix app serves a React app.] The app enables citizen scientists to monitor the acoustic environment of the whales and report when they hear the orcas call, whistle, or click, or when they hear other important signals. These human detections help prioritize signals to be classified through machine learning, using the lossless uncompressed data that is also transmitted to AWS S3 bucket from each hydrophone. Synergy between human and machine detection, classification, and eventually acoustic and visual localization will not only facilitate basic research into the communication and echolocation systems of fish-eating killer whales and other local marine species, but also will enhance many other research and educational activities with the potential to help the orcas recover. These activities include: live-listening outreach activities at the Seattle Aquarium and educational facilities of Orcasound members; NOAA studies of orca health and diet; mitigation of human-caused noise -- like pile driving at Washington State Ferry docks; & oil spill prevention and response. Over the long term, Orcasound data will help assess noise levels throughout the killer whales' critical habitat and identify the most persistent sources of noise pollution at the frequencies used by marine mammals for vital activities like foraging and reproduction. Thus, to help save the endangered southern resident killer whales, we need a wide spectrum of volunteers: developers (for software -- at the hydrophone node, in the app, and for real-time cloud-based data analysis), beta-tester citizen scientists, user researchers, designers, and data hackers. Hackathon challenges include: optimize low-latency audio data acquisition and the upload script on the Raspberry Pi to improve player performance in the app; prioritize key features for beta-testing and implement a cycle of testing and refining them; develop an administrative interface (login, CMS, detection moderation, notifications); integrate a map view of hydrophone locations into the UI; clarify and begin implementing machine learning architecture and data pipelines; test mechanisms for real-time analysis, including visualization of audio data as a spectrogram, annotations from human or machine classifications, and quantification of noise statistics.`
      },
      {
        image:
          "https://democracylab-marlok.s3.amazonaws.com/thumbnails%2Fbenjamindonan%40gmail.com%2Fculture-shocks-logo%404x.png_1542500870.0934994.png",
        title: "Culture Shocks",
        description: "Cultural issues",
        moreDescription:
          "A mobile app to help international students overcome culture shock and develop cross-cultural competence .",
        skills: ["Social Justice", "Education", "Cultural Issues"],
        thirdDescription: `Culture shock is a feeling of confusion felt by someone visiting or moving to a country that they do not have much, if any, experience with.  Culture shocks can be funny, stressful, annoying or scary. When culture shocks are not dealt with properly they can lead to negative psychological and physiological effects, such as isolation, homesickness, depression, and hostility towards the host nation. 

        Culture Shock is an app that helps people deal with culture shocks by letting them process unfamiliar things that are happening to them in a safer and more positive environment.
        `
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
