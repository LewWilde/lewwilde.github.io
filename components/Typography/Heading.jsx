import css from './Heading.module.scss';

export const Heading = ({ children, level = 3, className }) => {

    const classNames = [css.h, css[`h--${level}`]]
    if (className) { classes.push(className) }

    const H = `h${level}`;

    return (
        <H className={classNames.join(' ')}>{children}</H>
    )

}