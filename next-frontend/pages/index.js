import Head from 'next/head'
import Image from 'next/image'
import client from '../client'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'




import { useState } from 'react'

export async function getStaticProps() {

  const query = '*[_type == "projects"]'

  let projects = await client.fetch(query)
    .then((data) => {
      return data
    })

  return {
    props: {
      projects
    }
  }
}

export default function Home({ projects }) {

  const [navState, setNavState] = useState("transparent");

  
  // if (window !== undefined) {
  //   document.addEventListener("scroll", () => {
  //     document.documentElement.dataset.scroll = window.scrollY;
  //   });

  //   const storeScroll = () => {
  //     document.documentElement.dataset.scroll = window.scrollY;

  //     if (window.scrollY > 60) {
  //       setNavState('solid')
  //       return;
  //     }
  //     setNavState('transparent');
  //   };

  //   document.addEventListener("scroll", storeScroll);

  //   storeScroll();
  //   console.log(window.scrollY)
  // }

  return (
    <main className='app__wrapper'>
      <Navbar/>
      <Hero />
      <About />
      <Projects projectsArray={projects}/>
      <Contact />
      <Footer />
    </main>
  )
}
