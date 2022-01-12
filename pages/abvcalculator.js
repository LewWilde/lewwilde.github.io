import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AbvCalculator from '../components/abv_calculator'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lew Wilde</title>
                <meta name="description" content="Lew Wilde" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    ABV Calculator
                </h1>

                <AbvCalculator />
            </main>

            <footer className={styles.footer}>
                lewwilde.co.uk
            </footer>
        </div >
    )
}