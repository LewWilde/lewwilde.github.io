"use client"

import { Button } from '@/components/Buttons/Button';
import { Heading } from '@/components/Typography/Heading';
import NextLink from "next/link"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { Card } from '@/components/Card/Card';
import css from './PostsSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation'

export const PostsSlider = ({ posts, heading, text, buttonText, buttonHref }) => {

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
            </div>
            <div className={css.slider_wrap}>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={"16"}
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