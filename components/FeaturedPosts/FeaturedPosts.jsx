import css from './FeaturedPosts.module.scss';
import { Button } from '@/components/Buttons/Button';
import NextLink from "next/link"

export const FeaturedPosts = ({ heading, text, buttonText, buttonHref, documents }) => {

    return (

        <section className={css.section}>
            <div className={css.intro}>
                <h2 className={css.intro_heading}>{heading}</h2>
                <div lassName={css.intro_text}>{text}</div>
                {buttonHref &&
                    <div className={css.intro_cta}>
                        <Button href={buttonHref} element={NextLink}>{buttonText ?? 'View All'}</Button>
                    </div>}
            </div>
            <pre>{JSON.stringify(documents, null, 2)}</pre>
        </section>

    )

}