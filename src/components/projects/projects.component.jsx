import React from "react";
import "./projects.styles.css";

import PCard from "../card/card.component";
import SkeltonCard from "../card/skelton-card";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/hereisfahad/projectsData/projects"
    )
      .then(r => r.json())
      .then(d => {
        this.setState({ projects: d });
      });
  }
  render() {
    const { projects } = this.state;
    return (
      <div
        style={{ marginTop: "25px" }}
        className="projectGrid animated bounceInUp"
      >
        {projects.length === 0 ? (
          <>
            <SkeltonCard />
            <SkeltonCard />
            <SkeltonCard />
          </>
        ) : (
          projects.map(item => (
            <PCard
              key={item.name}
              imgUrl={item.imgUrl}
              name={item.name}
              desc={item.desc}
              tools={item.tools}
              site={item.site}
              github={item.github}
            />
          ))
        )}
      </div>
    );
  }
}

export default Projects;
