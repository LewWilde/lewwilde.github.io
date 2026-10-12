import css from './Breadcrumbs.module.scss';
import { FolderOpen } from "@phosphor-icons/react/dist/ssr";
import { Children } from 'react';
import Link from 'next/link';

export const Breadcrumbs = ({ children, size = 'medium' }) => {

    const crumbs = []
    Children.forEach(children, (child, index) => {
        crumbs.push(<span key={index} className={css.breadcrumbs_sep}>/</span>);
        crumbs.push(child);

    })

    const classNames = [css.breadcrumbs, css[`breadcrumbs--${size}`]];

    return (
        <div className={classNames.join(' ')}><FolderOpen weight="bold" className={css.breadcrumbs_icon} />
            {crumbs}
        </div>
    )

}

export const Crumb = ({ href, children }) => {

    const Element = href ? Link : "span";

    return (<Element href={href} className={css.breadcrumbs_crumb}>
        {children}
    </Element>)
}