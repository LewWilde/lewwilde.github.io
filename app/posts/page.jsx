import { Container } from "@/components/Layout/Container"
import { Heading } from "@/components/Typography/Heading"
import { client } from '../../sanityclient'
import Link from "next/link";
import { Card } from "@/components/Card/Card";

import { Pagination } from "@/components/Pagination/Pagination"
import { CardsGrid } from "@/components/Card/CardsGrid";

import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { PortableText } from '@portabletext/react';

import css from './page.module.scss';

const postsPerPage = 18;

export default async function Page({ searchParams }) {

    const pageNumber = parseInt((await searchParams)?.page ?? 1);

    const pageQROQ = `*[_type == "page" && slug.current == "posts"][0]`
    const postsGROQ = `*[_type == "post"] | order(_id) [${(postsPerPage * (pageNumber - 1))}...${(postsPerPage * (pageNumber - 1)) + postsPerPage}] {
      _id, 
      title, 
      featuredimage,
      "slug": '/posts/' + slug.current,
    }`
    const postCountGROQ = `count(* [_type == "post"])`;

    const GROQ = `{
        "page" : ${pageQROQ},
        "posts" : ${postsGROQ},
        "postCount" : ${postCountGROQ},
    }`

    const data = await client.fetch(GROQ) || {};

    const { page, posts, postCount } = data;
    const pageCount = Math.ceil(postCount / postsPerPage);
    const isFirstPage = pageNumber <= 1;
    const isLastPage = pageNumber === pageCount;

    return (
        <Container>
            <div className={css.page_content}>
                <div className={css.page_header}>
                    <Heading level='1'>
                        {page?.title}
                    </Heading>
                    {page?.body && <PortableText value={page.body} components={portableTextComponents} />}
                </div>
                {posts?.length > 0 &&
                    <CardsGrid>
                        {posts.map(post => <Card key={post._id} {...post} path={'posts'} />)}
                    </CardsGrid>
                }

                {pageCount > 0 &&
                    <div className={css.page_pagination}>
                        <Pagination>
                            <Pagination.Prev disabled={isFirstPage} element={!isFirstPage ? Link : 'button'} href={!isFirstPage ? `/projects?page=${pageNumber - 1}` : undefined} />
                            <Pagination.PageNumbers page={pageNumber} pageCount={pageCount} />
                            <Pagination.Next disabled={isLastPage} element={!isLastPage ? Link : 'button'} href={!isLastPage ? `/projects?page=${pageNumber + 1}` : undefined} />
                        </Pagination>
                    </div>
                }
            </div>
        </Container>
    )
}

export const metadata = {
    title: 'Projects',
}