import { Container } from '@/components/Layout/Container';
import { client } from '../../../sanityclient';
import { PortableText } from '@/components/PortableText/PortableText';
import { PostMeta } from '@/components/PostMeta/PostMeta';
import css from './Project.module.scss'
import { Heading } from '@/components/Typography/Heading';
import { Pill } from '@/components/Pill/Pill'
import { StickyAside } from '@/components/Layout/StickyAside';
import { ProjectGallery } from '@/components/Gallery/ProjectGallery';
import { Breadcrumbs, Crumb } from '@/components/Breadcrumbs/Breadcrumbs';
import { Article } from '@/components/Layout/Article';

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

            },
        },
    gallery[] {
        ...,
        _type == "image" => {
            ...,
            "alt": asset->altText,
        },
        _type == "video" => {
            ...,
            "src": src.asset->url,
            
        },
    },
    "tags": tags[]->{title}
  }`;

export async function generateMetadata({ params }) {

    const { slug } = await params;

    const post = await client.fetch(GROQ, { slug }) ?? {}

    const { title } = post;

    return {
        title: title,
    }
}

export default async function Project({ params }) {

    const { slug } = await params;

    const post = await client.fetch(GROQ, { slug }) ?? {}

    const { title, year, client: clientName, tags, gallery, featuredImage } = post;

    return (
        <Container size={'full'}>
            <div className={css.grid}>
                <ProjectGallery media={gallery} />
                <StickyAside>
                    <Article>
                        <div className={css.header}>
                            <Breadcrumbs>
                                <Crumb href={'/projects'}>Projects</Crumb>
                            </Breadcrumbs>
                            <Heading level={1}>{title}</Heading>
                        </div>
                        <PostMeta>
                            {clientName && <PostMeta.Block title={'Client'}>{clientName}</PostMeta.Block>}
                            {year && <PostMeta.Block title={'Year'}>{year}</PostMeta.Block>}
                            {tags?.length > 1 && <PostMeta.Block title={'Services'}>
                                <div className={css.tags}>{tags.map(({ title }) => <Pill key={title}>{title}</Pill>)
                                }</div>
                            </PostMeta.Block>}
                        </PostMeta>
                        <PortableText content={post.body} />
                    </Article>
                </StickyAside>

            </div>
        </Container >
    )

}