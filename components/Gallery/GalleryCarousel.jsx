"use client"

import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Image } from '@/components/Image/Image';
import 'swiper/css';
import 'swiper/css/navigation'
import { Button } from '@/components/Buttons/Button';
import css from './GalleryCarousel.module.scss';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export const GalleryCarousel = ({ images }) => {


    const [limits, setLimits] = useState({ isEnd: false, isBeginning: true });

    return (
        <div className={css.carousel}>
            <Swiper
                modules={[Navigation]}
                className={css.carousel_swiper}
                spaceBetween={8}
                onSlideChange={(swiper) => { setLimits({ isEnd: swiper.isEnd, isBeginning: swiper.isBeginning }) }}
            >
                {images.map((image, i) =>
                    <SwiperSlide key={image._key + i} className={css.carousel_slide}>
                        <Image className={css.carousel_image} maxWidth={1100} {...image} alt={""} />
                    </SwiperSlide>
                )}
                <GalleryControls limits={limits} />
            </Swiper>
        </div >
    )

}

const GalleryControls = ({ limits }) => {

    const swiper = useSwiper(); //swipers "useSwiper" isn't reactive - don't expect updates :(
    const { isEnd, isBeginning } = limits;

    return (
        <div className={css.controls}>
            <Button disabled={isBeginning} size={'small'} showMarks={false} onClick={() => swiper.slidePrev()}><CaretLeft weight="bold" size={"1em"} /></Button>

            <Button disabled={isEnd} size={'small'} showMarks={false} onClick={() => swiper.slideNext()}><CaretRight weight="bold" size={"1em"} /></Button>
        </div>
    )

}