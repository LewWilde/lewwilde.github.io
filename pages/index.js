import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import WelcomeTime from '../components/welcomeTime'
import MiniMap from '../components/MiniMap/MiniMap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lew Wilde</title>
        <meta name="description" content="Lew Wilde" />

      </Head>

      <NavBar hello={'hello'}></NavBar>
      <div className={styles.container}>


        <main className={styles.main}>
          <WelcomeTime />
          <p>{"I'm a web designer from the wonderful town of Blackburn. I work for Billian I.T Solutions, creating travel websites under the brand"}
            <a href="https://designfortravel.co.uk">Design for Travel.</a></p>
        </main>

        <MiniMap />

      </div >
    </>
  )
}
