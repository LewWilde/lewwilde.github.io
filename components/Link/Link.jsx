import NextLink from "next/link"
import css from "./Link.module.scss";

export default function Link({ href, children, isExternal }) {

    const classNames = [css.link];

    if (isExternal) {
        return (
            <a className={classNames.join(' ')} href={href}>{children}</a>
        )
    }

    return (<NextLink className={classNames.join(' ')} href={href}>{children}</NextLink>)

}