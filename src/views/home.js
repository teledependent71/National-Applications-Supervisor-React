import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>National Applications Supervisor</title>
        <meta property="og:title" content="National Applications Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
