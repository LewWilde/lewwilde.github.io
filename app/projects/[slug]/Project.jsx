import { client } from '../../../sanityclient';

export async function generateStaticParams() {

    const posts = await client.fetch(
        `*[_type == "project"]{"slug":slug.current}`
    )

    return posts

}

export default async function Project({ params }) {

    const { slug } = await params;

    const post = await client.fetch(`*[_type == "project" && slug.current == $slug][0]`, { slug }) ?? {}

    const { title, _updatedAt } = post;

    return (
        <div>
            {title}
            {_updatedAt}
        </div>
    )

}