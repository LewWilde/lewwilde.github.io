import { Container } from '@/components/Layout/Container';
import { client } from '../../../sanityclient';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { Image } from '@/components/Image/Image';
import { PostMeta } from '@/components/PostMeta/PostMeta';
import css from './Project.module.scss'
import { Heading } from '@/components/Typography/Heading';
import { Pill } from '@/components/Pill/Pill'

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
        },
    "tags": tags[]->{title}
  }`;

export default async function Project({ params }) {

    const { slug } = await params;

    const post = await client.fetch(GROQ, { slug }) ?? {}

    const { title, year, client: clientName, tags, gallery, featuredimage } = post;

    console.log(post)


    return (
        <Container size={'full'}>
            <div className={css.grid}>
                <div className={css.gallery}>
                    <Image className={css.gallery_image} maxWidth={1100} {...featuredimage} alt={""} />
                </div>
                <Container.Main className={css.main}>

                    <Heading level={1}>{title}</Heading>
                    <div>
                        <PostMeta>
                            {clientName && <PostMeta.Block title={'Client'}>{clientName}</PostMeta.Block>}
                            {year && <PostMeta.Block title={'Year'}>{year}</PostMeta.Block>}
                            {tags?.length > 1 && <PostMeta.Block title={'Services'}>
                                <div className={css.tags}>{tags.map(({ title }) => <Pill key={title}>{title}</Pill>)
                                }</div>
                            </PostMeta.Block>}
                        </PostMeta>
                    </div>
                    <PortableText value={post.body} components={portableTextComponents} />

                </Container.Main>
            </div>
        </Container>
    )

}