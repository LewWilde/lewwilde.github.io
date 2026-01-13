import { Image } from "../Image/Image"
import NextLink from "next/link";
import css from './FeaturedCard.module.scss'
import { ArrowFatLinesRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../Buttons/Button";
import { Breadcrumbs, Crumb } from "../Breadcrumbs/Breadcrumbs";
import { resolveLink } from "../../utils/resolveLink";

export const FeaturedCard = ({ featuredImage, title, slug, path, _type }) => {

    const href = resolveLink({ _type, slug });

    return (<NextLink className={css.card} href={href}>
        <div className={css['card_image-wrap']} >
            <Image className={css.card_image} maxWidth={1100} {...featuredImage} alt={title} />
        </div>
        <div className={css.card_content}>
            <div className={css['card_content-wrap']}>
                <div>
                    <Breadcrumbs size={'small'}>
                        <Crumb>{path}</Crumb>
                    </Breadcrumbs>
                </div>
                {title}
            </div>
            <Button variant={"inverted"} element={"div"}><ArrowFatLinesRight weight="bold" size={"1em"} /></Button>
        </div>
    </NextLink >)
}