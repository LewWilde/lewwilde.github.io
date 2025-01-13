import styles from './page.module.css'
import WelcomeTime from '../components/welcomeTime'
import NavBar from '../components/Nav/NavBar'

export default function Home() {
    return (
        <>
            <NavBar></NavBar>
            <div className={styles.container}>

                <main className={styles.main}>
                    <WelcomeTime />
                    <p>I&apos;m a web designer from the wonderful town of Blackburn. I work for Billian I.T Solutions, creating travel websites under the brand <a href="https://designfortravel.co.uk">Design for Travel</a></p>
                </main>

            </div >
        </>
    )
}

export const metadata = {
    title: 'Lew Wilde',
}
