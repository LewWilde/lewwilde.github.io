import { Image } from '@/components/Image/Image'
import { Button } from '@/components/Buttons/Button'
import { Breadcrumbs, Crumb } from '@/components/Breadcrumbs/Breadcrumbs'
import { ArrowFatLinesRight } from "@phosphor-icons/react/dist/ssr";
import css from './Card.module.scss'
import NextLink from "next/link";
import { resolveLink } from '../../utils/resolveLink';

export const Card = (props) => {

    const { title, featuredimage, path, slug, _type } = props;
    const href = resolveLink({ slug, _type });

    return (
        <NextLink href={href} className={css.card}>
            <div className={css['card_image-wrap']} >
                {featuredimage && <Image className={css.card_image} maxWidth={1100} {...featuredimage} alt={title} />}
            </div>
            <div className={css.card_content}>
                <div className={css['card_content-wrap']}>
                    <Breadcrumbs size={'small'}>
                        <Crumb>{path}</Crumb>
                    </Breadcrumbs>
                    <h3 className={css.card_title}>{title}</h3>
                </div>

                <Button className={css.card_button} variant={"outline"} element={'div'}><ArrowFatLinesRight weight="fill" size={"1em"} /></Button>
            </div>

        </NextLink>
    )

}