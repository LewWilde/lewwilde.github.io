"use client";

import { Image } from '@/components/Image/Image';
import { GalleryCarousel } from "@/components/Gallery/GalleryCarousel";
import css from './ProjectGallery.module.scss'

export const ProjectGallery = ({ images }) => {

    if (!images?.length) {
        return;
    }

    return (
        <div>
            <div className={css.gallery}>
                {images.map((image, i) =>
                    <Image loading={i === 0 ? 'eager' : 'lazy'} className={css.gallery_image} key={image._key} maxWidth={1100} {...image} alt={""} />
                )
                }
            </div>
            <div className={css.carousel}>
                <GalleryCarousel images={images} loading='eager' />
            </div>
        </div>

    )

}