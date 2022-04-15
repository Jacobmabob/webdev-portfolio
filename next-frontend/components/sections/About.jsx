import React from "react";
import styles from "../../styles/sections/About.module.scss";
import Image from "next/image";
import avatarImg from '../../public/js01.jpeg'
import svgShape from '../../public/blob.svg'

const About = () => {
  return (
    <section className="app__container about__bg" id="about">
      <h1 className="section__header">About.</h1>
      <div className={styles.about__container}>
        <div className="flex__item">
          <div>
            <div className={styles.bio__container}>
              <p>Hey! <br /><br />
                I&apos;m Jacob. I&apos;m a Developer, Luthier, and Musician who has always had a passion for the creative process.
                <br />
                <br />
                I&apos;ve recently completed a Full Stack Web Developement Bootcamp at the Georgia Institue of Technology and am looking to land my first job in the field.
                <br />
                <br />
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
                <li>GraphQl</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex__item">
          <div className={styles.img__container}>
            <div className={styles.img__wrapper}>
              <div className={styles.about__img}>
                <Image
                  src={avatarImg}
                  layout="intrinsic"
                  alt="pic o' me"
                />
              </div>
              <div className={styles.svg__bg}>
                {/* <Image
                  width={700}
                  height={700}
                  src={svgShape}
                  layout='intrinsic'
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
