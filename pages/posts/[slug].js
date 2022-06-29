import { promises as fs } from 'fs'
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

function Post({ ...props }) {
    // Render post...

    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <img src={props.thumbnail} width="100px" />
            <ReactMarkdown>{props.content}</ReactMarkdown>
        </>
    )

}

// This function gets called at build time
export async function getStaticPaths() {


    const postsDirectory = path.join(process.cwd(), 'content/posts')
    const filenames = await fs.readdir(postsDirectory)


    const paths = filenames.map((file) => ({
        params: { slug: file.replace('.md', '') },
    }))

    return {
        paths, fallback: false
    }
}

// This also gets called at build time
export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params
    const file = path.join(process.cwd(), `content/posts/${slug}.md`)
    const { content, data } = matter.read(file)

    return {
        props: {
            content,
            ...JSON.parse(JSON.stringify(data))
        }
    }
}

export default Post