"use client"

import NextLink from "next/link"
import css from "./NavLink.module.scss";

export const NavLink = ({ href, children, isExternal, onNavigate }) => {

    const classNames = [css.link];

    if (isExternal) {
        return (
            <a className={classNames.join(' ')} href={href}>{children}</a>
        )
    }

    return (<NextLink className={classNames.join(' ')} href={href} onNavigate={() => onNavigate?.()}>{children}</NextLink>)

}