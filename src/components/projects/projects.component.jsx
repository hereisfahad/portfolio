import React from "react";
import "./projects.styles.css";

import PCard from "../card/card.component";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "E-Clothing",
          desc:
            "E-commerce site for clothing items. which displays and allow user to checkout multiple items.",
          tools: "ReactJs, Redux, Firebase, Stripe",
          imgUrl: "https://i.ibb.co/fxV4ygL/e-clothing.png",
          site: "https://live-e-clothing.herokuapp.com/",
          github: "https://github.com/hereisfahad/e-clothing"
        },
        {
          name: "Face Detection",
          desc:
            "Detects faces in image (take input image url) using Clarifi Api.",
          tools: "ReactJs, NodeJs, PostgreSQL, Clarifai Api",
          imgUrl: "https://i.ibb.co/1QK7zYd/smart-brain.png",
          site: "https://smartbrainy.netlify.com/",
          github: "https://github.com/hereisfahad/smart-brain-ZTM/"
        },
        {
          name: "Budget App",
          desc:
            "A basic site which calculated budget based on incom and expenditures.",
          tools: "HTML5, CSS3, JavaScript",
          imgUrl: "https://i.ibb.co/DzXQxr7/budget.png",
          site: "https://hereisfahad.github.io/Budget-App",
          github: "https://github.com/hereisfahad/Budget-App"
        },
        {
          name: "Robo Filter Web-App",
          desc: "Basic react app which displays robot cards.",
          tools: "ReactJs",
          imgUrl: "https://i.ibb.co/rkv8tRX/robo.png",
          site: "https://hereisfahad.github.io/robofriend-ZTM/",
          github: "https://github.com/hereisfahad/robofriend-ZTM"
        },
        {
          name: "Todo List-JQuery",
          desc: "Basic todo list with jquery",
          tools: "HTML, CSS, JQuery",
          imgUrl: "https://i.ibb.co/jJRD1G2/to-DOJquery.png",
          site: "https://hereisfahad.github.io/todolist-jquery/",
          github: "https://github.com/hereisfahad/todolist-jquery"
        },
        {
          name: "Weather App",
          desc:
            "Basic react app which displays weather based on city and county",
          tools: "ReactJs",
          imgUrl: "https://i.ibb.co/3mgHTZB/weather.png",
          site: "https://github.com/hereisfahad/Weather-app",
          github: "https://hereisfahad.github.io/weatherApp/"
        },
        {
          name: "Todo List js",
          desc: "Basic todo list with vanilla javascript",
          tools: "HTML5, CSS, JavaScript",
          imgUrl: "https://i.ibb.co/jJRD1G2/to-DOJquery.png",
          site: "https://hereisfahad.github.io/todo-js/.",
          github: "https://github.com/hereisfahad/todo-js"
        },
        {
          name: "Radio",
          desc: "Some of the best radio channels",
          tools: "HTML5, CSS, JavaScript, Howler.js",
          imgUrl: "https://i.ibb.co/8M0SCnL/Capture.png",
          site: "https://hereisfahad.github.io/get-radio/",
          github: "https://github.com/hereisfahad/get-radio"
        }
      ]
    };
  }
  // componentDidMount() {
  //   fetch(
  //     "https://my-json-server.typicode.com/hereisfahad/projectsData/projects"
  //   )
  //     .then(r => r.json())
  //     .then(d => {
  //       this.setState({ projects: d });
  //     });
  // }
  render() {
    const { projects } = this.state;
    return (
      <div
        style={{ marginTop: "25px" }}
        className="projectGrid animated bounceInUp"
      >
        {projects.map(item => (
          <PCard
            key={item.name}
            imgUrl={item.imgUrl}
            name={item.name}
            desc={item.desc}
            tools={item.tools}
            site={item.site}
            github={item.github}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
