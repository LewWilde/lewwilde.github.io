import { portableTextComponents } from '@/components/PortableText/portableTextComponents';
import { PortableText as PortableTextReact } from '@portabletext/react';
import css from './PostableText.module.scss'

export const PortableText = ({ content, className }) => {

    const classes = [css.content];
    if (className) { classes.push(className); }

    return (
        <div className={classes.join(' ')}>
            <PortableTextReact value={content} components={portableTextComponents}></PortableTextReact>
        </div>
    )

}