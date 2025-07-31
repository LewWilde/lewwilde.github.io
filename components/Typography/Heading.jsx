import css from './Heading.module.scss';

export const Heading = ({ children, level = 3, className }) => {

    const classNames = [css.h, css[`h--${level}`]]
    if (className) { classNames.push(className) }

    const H = `h${level}`;

    return (
        <H className={classNames.join(' ')}>{children}</H>
    )

}