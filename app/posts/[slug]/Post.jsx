import { client } from '../../../sanityclient';
import { PortableText } from '@/components/PortableText/PortableText';
import { Container } from '@/components/Layout/Container';
import { PostHero } from '@/components/PostHero/PostHero';

export async function generateStaticParams() {

    const posts = await client.fetch(
        `*[_type == "post"]{"slug":slug.current}`
    )

    return posts

}

const GROQ = `*[_type == "post" && slug.current == $slug][0] {
    ...,
    body[] {
            ...,
            _type == "image" => {
                ...,
                "alt": asset->altText,

            },
        },
  }`;

export default async function Post({ params }) {

    const { slug } = await params;

    const post = await client.fetch(GROQ, { slug }) ?? {}

    const { body } = post;

    return (
        <article>
            <PostHero {...post}></PostHero>
            <Container size='content'>
                <PortableText content={body} />
            </Container>
        </article>

    )

}