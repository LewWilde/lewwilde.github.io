"use client"

import { useRef, useState } from 'react';
import { Button } from '@/components/Buttons/Button';
import { Heading } from '@/components/Typography/Heading';
import NextLink from "next/link"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { Card } from '@/components/Card/Card';
import css from './PostsSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation'

import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export const PostsSlider = ({ posts, heading, text, buttonText, buttonHref }) => {
    const swiperRef = useRef(null);
    const [limits, setLimits] = useState({ isEnd: false, isBeginning: true });
    const { isEnd, isBeginning } = limits;

    const handleLimits = (swiper) => {
        setLimits({ isEnd: swiper.isEnd, isBeginning: swiper.isBeginning });
    }

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
            setTimeout(() => {
                handleLimits(swiperRef.current)
            }, 0);
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
            setTimeout(() => {
                handleLimits(swiperRef.current)
            }, 0);
        }
    };

    return (
        <section className={css.section}>
            <div className={css.intro}>
                <div className={css.intro_wrap}>
                    <Heading level={2}>{heading}</Heading>
                    <div className={css.intro_text}>{text}</div>
                    {buttonHref &&
                        <div className={css.intro_cta}>
                            <Button href={buttonHref} element={NextLink} variant="outline" >{buttonText ?? 'View All'}</Button>
                        </div>}
                </div>
                <div className={css.controls}>
                    <Button disabled={isBeginning} size={'small'} showMarks={false} onClick={handlePrev}><CaretLeft weight="bold" size={"1em"} /></Button>
                    <Button disabled={isEnd} size={'small'} showMarks={false} onClick={handleNext}><CaretRight weight="bold" size={"1em"} /></Button>
                </div>

            </div>
            <div className={css.slider_wrap}>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={"16"}
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        handleLimits(swiper)
                        swiperRef.current = swiper
                    }}
                >
                    {posts?.map((post) =>
                        <SwiperSlide key={post?._key} className={css.slide}>
                            <Card {...post} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section >
    )

}