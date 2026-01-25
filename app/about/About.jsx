import { client } from '../../sanityclient';

import { Container } from '@/components/Layout/Container';
import { PortableText } from '@/components/PortableText/PortableText';
import { PostHero } from '@/components/PostHero/PostHero';

const GROQ = `*[_type == "page" && slug.current == "about"][0]{
    ...,
    body[] {
            ...,
            _type == "image" => {
                ...,
                "alt": asset->altText,

            },
        },
  }`;

export default async function About() {

    const post = await client.fetch(GROQ) ?? {}

    const { body } = post;

    return (
        <article>
            <PostHero {...post} _updatedAt={null}></PostHero>
            <Container size='content'>
                <PortableText content={body} />
            </Container>
        </article>
    )

}