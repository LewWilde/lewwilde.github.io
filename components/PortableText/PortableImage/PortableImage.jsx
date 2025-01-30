import {client } from '../../../sanityclient';
import ImageUrlBuilder from '@sanity/image-url';


const urlBuilder = ImageUrlBuilder(client)


export const PortableImage = ({value, isInline}) => {

    const image = urlBuilder.image(value)

    console.log(image )

    return(
        <img src={image.width(100).url()} alt={value.altText || ' '}
        loading="lazy" />
    )

}