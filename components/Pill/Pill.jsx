import css from './Pill.module.scss';

export const Pill = ({ children, className }) => {

    const classNames = [css.pill];
    if (className) { classNames.push(className) };

    return (
        <div className={classNames.join(' ')}>{children}</div>
    )
}