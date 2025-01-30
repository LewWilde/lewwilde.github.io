import { client } from '../../../sanityclient';
import ImageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import css from './PortableImage.module.scss';

const urlBuilder = ImageUrlBuilder(client)

export const PortableImage = ({ value, isInline }) => {

    const [, assetId, dimensionString, extension] = value.asset._ref.split('-')
    const [srcWidth, srcHeight] = (dimensionString || '').split('x').map(Number)

    /*sanity CDN base image 
    our max width in main is 22px (max font size) * 50 = 1100px;
    */
    const maxWidth = 1100;
    const maxHeight = (maxWidth / srcWidth) * srcHeight;
    const image = urlBuilder.image(value).width(maxWidth).url()

    return (
        <Image className={css.image} src={image} alt={value.altText || ' '} loading="lazy" width={maxWidth} height={maxHeight}></Image>
    )

}