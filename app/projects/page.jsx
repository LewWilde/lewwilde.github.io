import { Container } from "@/components/Layout/Container"
import { Heading } from "@/components/Typography/Heading"
import { client } from '../../sanityclient'
import Link from "next/link";
import { Button } from "@/components/Buttons/Button";

const postsPerPage = 2;
const postCountGROQ = `count(* [_type == "project"])`;

export default async function Page({ searchParams }) {

    const page = parseInt((await searchParams)?.page ?? 1);

    const GROQ = `*[_type == "project"] | order(_id) [${(postsPerPage * (page - 1))}...${(postsPerPage * (page - 1)) + postsPerPage}] {
      _id, title
    }`

    const posts = await client.fetch(GROQ) || []
    const postCount = await client.fetch(postCountGROQ) || 0;
    const pageCount = Math.ceil(postCount / postsPerPage);
    const isFirstPage = page <= 1;
    const isLastPage = page === pageCount;

    return (
        <Container>
            <Heading level='1'>
                Projects
            </Heading>

            {posts?.length > 0 &&
                posts.map(post => <div>{post?.title}</div>)
            }
            <Button disabled={isFirstPage} element={!isFirstPage ? Link : 'button'} href={!isFirstPage && `/projects?page=${page - 1}`}>Back</Button>
            {page} of {pageCount}
            <Button disabled={isLastPage} element={!isLastPage ? Link : 'button'} href={!isLastPage && `/projects?page=${page + 1}`}>Next</Button>
        </Container>
    )
}

export const metadata = {
    title: 'Projects',
}