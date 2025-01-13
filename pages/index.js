import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WelcomeTime from '../components/welcomeTime'

export default function Home() {
    return (
        <>
            <Head>
                <title>Lew Wilde</title>
                <meta name="description" content="Lew Wilde" />

            </Head>

            <div className={styles.container}>

                <main className={styles.main}>
                    <WelcomeTime />
                    <p>{"I'm a web designer from the wonderful town of Blackburn. I work for Billian I.T Solutions, creating travel websites under the brand"}
                        <a href="https://designfortravel.co.uk">Design for Travel</a></p>
                </main>

            </div >
        </>
    )
}
