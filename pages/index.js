import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import WelcomeTime from '../components/welcomeTime'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lew Wilde</title>
        <meta name="description" content="Lew Wilde" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>

      <NavBar hello={'hello'}></NavBar>
      <div className={styles.container}>


        <main className={styles.main}>
          <WelcomeTime />
          <p>I'm a web designer from the wonderful town of Blackburn.
            I work for Billian I.T Solutions, creating travel websites under the brand
            <a href="https://designfortravel.co.uk">Design for Travel.</a></p>
        </main>

      </div >
    </>
  )
}
