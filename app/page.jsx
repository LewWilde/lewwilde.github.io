import css from './page.module.css'
import WelcomeTime from '@/components/welcomeTime'
import { Container } from '@/components/Layout/Container'
import { client } from '../sanityclient';
import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { PortableText } from '@portabletext/react';
import { FeaturedPosts } from '@/components/FeaturedPosts/FeaturedPosts';
import { PostsSlider } from '@/components/PostsSlider/PostsSlider';

const GROQ = `*[_type == "home-single"][0]{
                ...,
                "projects": {
                    ...projects,
                    "documents": projects.documents[]->{
                        _type,
                        title,
                        featuredImage,
                        slug
                    }
                }
                }`;


export default async function Home() {

    const post = await client.fetch(GROQ) ?? {}

    const { hero_text, projects } = post;

    return (
        <Container size={'full'}>
            <section className={css.hero}>
                <WelcomeTime />
                <PortableText value={hero_text} components={portableTextComponents} />
            </section>
            <FeaturedPosts
                {...projects} buttonHref={'/projects'} />
            <PostsSlider heading={"Recent Posts"} buttonHref={'/blog'} posts={projects.documents} />
        </Container>
    )
}