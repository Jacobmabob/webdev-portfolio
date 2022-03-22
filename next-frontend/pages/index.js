import Head from 'next/head'
import Image from 'next/image'
import client from '../client'
import styles from '../styles/Home.module.scss'



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
    <div>

    </div>
  )
}
