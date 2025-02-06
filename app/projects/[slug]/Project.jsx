import { Container } from '@/components/Layout/Container';
import { client } from '../../../sanityclient';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/components/PortableText/portableTextComponents';


export async function generateStaticParams() {

    const posts = await client.fetch(
        `*[_type == "project"]{"slug":slug.current}`
    )

    return posts

}

const GROQ = `*[_type == "project" && slug.current == $slug][0] {
    ...,
    body[] {
            ...,
            _type == "image" => {
                ...,
                "alt": asset->altText,

            }
        }
  }`;

export default async function Project({ params }) {

    const { slug } = await params;

    const post = await client.fetch(GROQ, { slug }) ?? {}

    const { title, _updatedAt } = post;



    return (
        <Container.Main>
            {title}
            {_updatedAt}
            <PortableText value={post.body} components={portableTextComponents} />
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </Container.Main>
    )

}