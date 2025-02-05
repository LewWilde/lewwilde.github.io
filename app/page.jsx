import css from './page.module.css'
import WelcomeTime from '@/components/welcomeTime'
import { Container } from '@/components/Layout/Container'
import { client } from '../sanityclient';
import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { PortableText } from '@portabletext/react';
import { FeaturedPosts } from '@/components/FeaturedPosts/FeaturedPosts';

const GROQ = `*[_type == "home-single"][0]`;


export default async function Home() {

    const post = await client.fetch(GROQ) ?? {}

    const { hero_text, projects } = post;

    return (
        <main>
            <Container>
                <section className={css.hero}>
                    <WelcomeTime />
                    <PortableText value={hero_text} components={portableTextComponents} />
                </section>
                <FeaturedPosts {...projects} buttonHref={'/projects'} />

            </Container >
        </main>
    )
}

export const metadata = {
    title: 'Lew Wilde',
}
