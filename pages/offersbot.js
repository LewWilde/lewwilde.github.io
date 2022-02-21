import Head from 'next/head'
import styles from '../styles/Home.module.css'
import OffersBot from '../components/offers_bot'

export default function Home() {



    return (
        <div className={styles.container}>
            <Head>
                <title>Lew Wilde</title>
                <meta name="description" content="Lew Wilde" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <OffersBot />
            </main>

            <footer className={styles.footer}>
                lewwilde.co.uk
            </footer>
        </div >
    )
}