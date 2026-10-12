import css from './page.module.css'
import WelcomeTime from '@/components/welcomeTime'
import { Container } from '@/components/Layout/Container'
import { client } from '../sanityclient';
import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { PortableText } from '@portabletext/react';
import { FeaturedPosts } from '@/components/FeaturedPosts/FeaturedPosts';
import { PostsSlider } from '@/components/PostsSlider/PostsSlider';

const postsGROQ = `*[_type == "post"] | order(_id) [0...10] {
      _id, 
      _type,
      title, 
      featuredImage,
      slug,
    }`

const pageGROQ = `*[_type == "home-single"][0]{
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

const GROQ = `{
        "page" : ${pageGROQ},
        "posts" : ${postsGROQ}
    }`


export default async function Home() {

    const { page, posts } = await client.fetch(GROQ) ?? {}

    const { hero_text, projects } = page;

    return (
        <Container size={'full'}>
            <section className={css.hero}>
                <WelcomeTime />
                <PortableText value={hero_text} components={portableTextComponents} />
            </section>
            <FeaturedPosts
                {...projects} buttonHref={'/projects'} />
            <PostsSlider heading={"Recent Posts"} buttonHref={'/posts'} posts={posts} />
        </Container>
    )
}