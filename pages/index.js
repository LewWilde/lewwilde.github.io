import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lew Wilde</title>
        <meta name="description" content="Lew Wilde" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Waiting to be born.
        </h1>
      </main>

      <footer className={styles.footer}>
        lewwilde.co.uk
      </footer>
    </div >
  )
}
