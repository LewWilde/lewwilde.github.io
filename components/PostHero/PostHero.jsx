import { Container } from "@/components/Layout/Container"
import { Heading } from '@/components/Typography/Heading';
import { Breadcrumbs, Crumb } from '@/components/Breadcrumbs/Breadcrumbs';
import { resolvePath } from '../../utils/resolvePath';
import { Image } from "@/components/Image/Image";
import css from './PostHero.module.scss';
import { Timestamp } from "../Timestamp/Timestamp";

export const PostHero = ({ title, _updatedAt, _type, featuredImage }) => {

    const path = resolvePath({ _type });

    return (
        <div className={css.hero}>
            {featuredImage &&
                <div className={css.hero_media}>
                    <Image maxWidth={1100} {...featuredImage} alt={title} className={css.hero_image} />
                </div>
            }
            <div className={css.hero_content}>
                <Breadcrumbs>
                    <Crumb href={`/${path}`}>{path}</Crumb>
                </Breadcrumbs>
                <Heading level={1}>{title}</Heading>
                {_updatedAt && <div className={css.hero_timestamp}>Last edit: <Timestamp timestamp={_updatedAt} /></div>}
            </div>
        </div>
    )


}