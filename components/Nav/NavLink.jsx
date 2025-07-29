"use client"

import { LinkPrimitive } from "@/components/Link/LinkPrimitive";
import css from "./NavLink.module.scss";

export const NavLink = ({ children, ...props }) => {

    const classNames = [css.link];

    return (<LinkPrimitive className={classNames.join(' ')} {...props}>{children}</LinkPrimitive>)

}