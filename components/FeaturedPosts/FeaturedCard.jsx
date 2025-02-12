import { Image } from "../Image/Image"
import NextLink from "next/link";
import css from './FeaturedCard.module.scss'
import { FolderOpen } from "@phosphor-icons/react/dist/ssr";
import { ArrowFatLinesRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../Buttons/Button";

export const FeaturedCard = ({ featuredimage, name, slug, path }) => {

    return (<NextLink className={css.card} href={slug}>
        <div className={css['card_image-wrap']} >
            <Image className={css.card_image} maxWidth={1100} {...featuredimage} alt={name} />
        </div>
        <div className={css.card_content}>
            <div className={css['card_content-wrap']}>
                <div className={css['card_category']}><FolderOpen weight="bold" className={css['card_category_icon']} />/ {path}</div>
                {name}
            </div>
            <Button variant={"inverted"} element={"div"}><ArrowFatLinesRight weight="bold" size={"1em"} /></Button>
        </div>
    </NextLink >)
}