"use client"

import NextLink from "next/link"

export const LinkPrimitive = ({ href, children, isExternal, onNavigate, className }) => {

    if (isExternal) {
        return (
            <a className={className} href={href}>{children}</a>
        )
    }

    return (<NextLink className={className} href={href} onNavigate={() => onNavigate?.()}>{children}</NextLink>)

}