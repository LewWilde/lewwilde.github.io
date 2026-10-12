import css from './FeaturedPosts.module.scss';
import { Button } from '@/components/Buttons/Button';
import NextLink from "next/link"
import { FeaturedCard } from '@/components/FeaturedPosts/FeaturedCard';
import { Heading } from '../Typography/Heading';

export const FeaturedPosts = ({ heading, text, buttonText, buttonHref, documents }) => {

    return (

        <section className={css.section}>
            <div className={css.intro}>
                <div className={css.intro_wrap}>
                    <Heading level={2}>{heading}</Heading>
                    <div className={css.intro_text}>{text}</div>
                    {buttonHref &&
                        <div className={css.intro_cta}>
                            <Button href={buttonHref} element={NextLink}>{buttonText ?? 'View All'}</Button>
                        </div>}
                </div>
            </div>
            {documents?.map(document => <FeaturedCard key={document.slug.current} path={'projects'} {...document} />)}
        </section>

    )

}