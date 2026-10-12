"use client"

import { LinkPrimitive } from "@/components/Link/LinkPrimitive";
import css from "./NavLink.module.scss";

export const NavLink = ({ children, size = 'default', ...props }) => {

    const classNames = [css.link, css[`link--size-${size}`]];

    return (<LinkPrimitive className={classNames.join(' ')} {...props}>{children}</LinkPrimitive>)

}