import { client } from '../../../sanityclient';

export async function generateStaticParams() {

    const posts = await client.fetch(
        `*[_type == "post"]{"slug":slug.current}`
    )

    return posts

}

export default async function Post({ params }) {

    const { slug } = await params;

    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug }) ?? {}

    const { title, _updatedAt } = post;


    return (
        <div>
            {title}
            {_updatedAt}
        </div>
    )

}