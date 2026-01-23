import { client } from '../../../sanityclient';

import { Container } from '@/components/Layout/Container';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { Article } from '@/components/Layout/Article';
import { Heading } from '@/components/Typography/Heading';
import { Breadcrumbs, Crumb } from '@/components/Breadcrumbs/Breadcrumbs';
import { resolvePath } from '../../../utils/resolvePath';

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

    const { title, body, _updatedAt, _type } = post;
    const path = resolvePath({ _type });

    return (
        <Container>
            <Article position="center">
                <Article.Content>
                    <Breadcrumbs>
                        <Crumb href={`/${path}`}>{path}</Crumb>
                    </Breadcrumbs>
                    <Heading level={1}>{title}</Heading>
                    <div>{_updatedAt}</div>
                    <PortableText value={body} components={portableTextComponents} />
                </Article.Content>
            </Article>
        </Container>
    )

}