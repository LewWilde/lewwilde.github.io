"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { Image } from '@/components/Image/Image';
import { GalleryCarousel } from "@/components/Gallery/GalleryCarousel";
import css from './ProjectGallery.module.scss'

export const ProjectGallery = ({ images }) => {

    const { isDesktop } = useWindowSize();

    if (!images.length) {
        return;
    }

    if (isDesktop) {
        return (
            <div className={css.gallery}>
                {images.map(image =>
                    <Image className={css.gallery_image} key={image._key} maxWidth={1100} {...image} alt={""} />
                )

                }

            </div>
        )
    }

    return (
        <GalleryCarousel images={images} />
    )

}