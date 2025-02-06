import css from './PortableImage.module.scss';
import { Image } from '@/components/Image/Image';

export const PortableImage = ({ value, isInline }) => {

    /*sanity CDN base image 
    our max width in main is 22px (max font size) * 50 = 1100px;
    */
    const maxWidth = 1100;


    return (
        <Image className={css.image} {...value} maxWidth={maxWidth} ></Image>
    )

}