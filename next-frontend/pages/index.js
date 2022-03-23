import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import styles from '../styles/Home.module.scss'

import Navbar from '../components/Navbar'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'




import { useState } from 'react'

export async function getStaticProps() {

  const query = '*[_type == "projects"]'

  let projects = await client.fetch(query)
    .then((data) => {
      console.log(data)
      return data
    })

  return {
    props: {
      projects
    }
  }
}

export default function Home({ projects }) {
  return (
    <main className='app__wrapper'>
      <Navbar />
      <Hero />
      <About />
      <Projects projectData={projects}/>
      <Contact />
    </main>
  )
}
