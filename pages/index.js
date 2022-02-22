import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lew Wilde</title>
        <meta name="description" content="Lew Wilde" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>

      <NavBar hello={'hello'}></NavBar>
      <div className={styles.container}>


        <main className={styles.main}>
          <h1 className={styles.title}>
            Caustic disco, city on fire
          </h1>
        </main>

      </div >
    </>
  )
}
