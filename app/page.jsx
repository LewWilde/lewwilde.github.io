import css from './page.module.css'
import WelcomeTime from '@/components/welcomeTime'
import Link from '@/components/Link/Link'
import { Container } from '@/components/Layout/Container'

export default function Home() {
    return (
        <main>
            <Container>
                <section className={css.hero}>
                    <WelcomeTime />
                    <p>I&apos;m a web designer from the wonderful town of Blackburn. I work for Billian I.T Solutions, creating travel websites under the brand <Link href="https://designfortravel.co.uk">Design for Travel</Link></p>
                </section>

            </Container >
        </main>
    )
}

export const metadata = {
    title: 'Lew Wilde',
}
