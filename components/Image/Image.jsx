import { client } from '../../sanityclient';
import ImageUrlBuilder from '@sanity/image-url';
import NextImage from 'next/image';

const urlBuilder = ImageUrlBuilder(client)

export const Image = ({ asset, maxWidth = 1100, loading = "lazy", ...otherProps }) => {

    const [, assetId, dimensionString, extension] = asset._ref.split('-')
    const [srcWidth, srcHeight] = (dimensionString || '').split('x').map(Number)

    /*sanity CDN base image 
    our max width in main is 22px (max font size) * 50 = 1100px;
    */
    const maxHeight = (maxWidth / srcWidth) * srcHeight;
    const image = urlBuilder.image(asset).width(maxWidth).url()

    return (
        <NextImage src={image} loading={loading} width={maxWidth} height={maxHeight} {...otherProps}></NextImage>
    )

}