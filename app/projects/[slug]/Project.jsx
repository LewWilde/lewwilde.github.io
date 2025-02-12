import { Container } from '@/components/Layout/Container';
import { client } from '../../../sanityclient';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { Image } from '@/components/Image/Image';
import css from './Project.module.scss'

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

    const { title, _updatedAt, featuredimage } = post;

    console.log(post)


    return (
        <Container size={'full'}>
            <div className={css.grid}>
                <div className={css.gallery}>
                    <Image className={css.gallery_image} maxWidth={1100} {...featuredimage} alt={""} />
                </div>
                <Container.Main className={css.main}>
                    {title}
                    {_updatedAt}
                    <PortableText value={post.body} components={portableTextComponents} />

                </Container.Main>
            </div>
        </Container>
    )

}