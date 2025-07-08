"use client";
import { Fragment } from 'react';
import { Image } from '@/components/Image/Image';
import { Video } from '../Video/Video';
import { GalleryCarousel } from "@/components/Gallery/GalleryCarousel";
import css from './ProjectGallery.module.scss'

export const ProjectGallery = ({ media }) => {

    if (!media?.length) {
        return;
    }

    return (
        <div>
            <div className={css.gallery}>
                {media.map((item, i) => {

                    if (item._type === 'image') { return <Image loading={i === 0 ? 'eager' : 'lazy'} className={css.gallery_image} key={item._key} maxWidth={1100} {...item} alt={""} /> }
                    if (item._type === 'video') { return <Video className={css.gallery_image} key={item._key} {...item} /> }
                }
                )
                }
            </div>
            <div className={css.carousel}>
                <GalleryCarousel media={media} loading='eager' />
            </div>
        </div >

    )

}