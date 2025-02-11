import { Image } from "../Image/Image"
import NextLink from "next/link";
import css from './FeaturedCard.module.scss'

export const FeaturedCard = ({ featuredimage, name, slug }) => {

    return (<NextLink className={css.card} href={slug}>
        <div className={css['card_image-wrap']} >
            <Image className={css.card_image} maxWidth={1100} {...featuredimage} alt={name} />
        </div>

        <div className={css.card_content}>
            <div className={css['card_content-wrap']}>
                {name}
            </div>

        </div>
    </NextLink >)
}