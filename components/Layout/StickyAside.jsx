"use client"

import css from './StickyAside.module.scss';
import { useEffect, useRef } from 'react';

export const StickyAside = ({ children }) => {

    const wrapperRef = useRef();
    const marginRef = useRef();
    const containerRef = useRef();

    let lastScrollTop = typeof document == "undefined" ? 0 : document.body.scrollTop;

    const handleScroll = () => {
        const wrapper = wrapperRef.current;
        const margin = marginRef.current;
        const container = containerRef.current;

        if (!(wrapper && margin && container)) { return; }

        const { height } = container.getBoundingClientRect()
        const { scrollTop } = document.documentElement;
        const direction = scrollTop > lastScrollTop ? 1 : 0;

        lastScrollTop = scrollTop;
        if (height <= window.innerHeight) {
            container.style.top = "0px",
                container.style.bottom = "",
                margin.style.marginTop = "";
            return
        }

        const wrapperRect = wrapper.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect();
        margin.style.marginTop = `${containerRect.top - wrapperRect.top}px`;

        direction === 1 ? (
            container.style.bottom = "",
            container.style.top = `-${height - window.innerHeight}px`
        ) : (
            container.style.top = "",
            container.style.bottom = `-${height - window.innerHeight}px`
        )

    }

    useEffect(() => {

        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={wrapperRef} className={css['sticky-wrap']}>
            <div ref={marginRef}></div>
            <div ref={containerRef} className={css.sticky}>
                <div className={css.sticky_children}>
                    {children}
                </div>
            </div>
        </div >
    )
}