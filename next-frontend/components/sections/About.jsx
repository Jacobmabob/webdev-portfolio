import React from "react";
import styles from "../../styles/sections/About.module.scss";

const About = () => {
  return (
    <section className="app__container">
      <h1 className="section__header">About</h1>
      <div className={styles.about__container}>
        <div className="flex__item">
          <div>
            <div className={styles.bio__container}>
              <p>Hey! Welcome to my site. I'm Jacob and I figure this is the place where I should probably tell you a little bit about myself.
                <br/>
                <br/>
                I'm a Developer, Luthier, Musician and all around tinkerer who has always loved the process of creating. From the design phase when your mind is buzzing with ideas, to struggling 
                <br/>
                <br/>
                I was drawn to developement because there are no limits to what you can learn or accomplish. Just about any idea can be brought to life with some hard work and a few Google searches. 
              </p>
            </div>
            <div className={styles.skills__container}>
              <h4>Here are some tools I like to use:</h4>
              <ul>
                <li>Javascript</li>
                <li>HTML & CSS</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>MySQL</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex__item">Picture</div>
      </div>
    </section>
  );
};

export default About;
