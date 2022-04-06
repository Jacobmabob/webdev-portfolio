import React from "react";
import styles from "../../styles/sections/Projects.module.scss";

import Card from "../Card";




const Projects = ({ projectsArray }) => {

  console.log(projectsArray)

  return (
    <section className="app__container">
      <h1 className="section__header">Projects</h1>
      <div className={styles.projects__container}>
        {projectsArray.map((project, index) => (
          <Card  projectData={project} key={index} />
        ))}
        
        
      </div>
    </section>
  );
};

export default Projects;
