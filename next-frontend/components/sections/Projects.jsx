import React from "react";
import styles from "../../styles/sections/Projects.module.scss";

import Card from "../Card";




const Projects = ({ projectsArray }) => {


  return (
    <section className="app__container" id="projects">
      <h1 className="section__header">Projects</h1>
      <div className={styles.projects__container}>
        {projectsArray.map((project, index) => (
          <Card  projectData={project} key={index} />
        ))}
        
        
      </div>
      <a className={styles.more__projects_link} 
      href='https://github.com/Jacobmabob'
      title='Check out my github!'
      >
          Check out my github
          <span></span>
        </a>
    </section>
  );
};

export default Projects;
