import { Image } from "../Image/Image"
import NextLink from "next/link";
import css from './FeaturedCard.module.scss'

export const FeaturedCard = ({ featuredimage, name, slug }) => {

    return (<NextLink className={css.card_image} href={slug}>
        <Image className={css.card_image} maxWidth={360} {...featuredimage} alt={name} />
        {name}
    </NextLink>)
}