import css from "./Button.module.scss";

export const Button = (props) => {

    const { children, className, element: Element = 'button', variant = 'fill', size = 'default', showMarks = true, ...otherProps } = props;
    const classNames = [css.button, css[`button--${variant}`], css[`button--size-${size}`]];
    if (className) {
        classNames.push(className);
    }

    return (<Element className={classNames.join(' ')} {...otherProps} >
        {showMarks &&
            <>
                <div className={`${css.mark} ${css['mark--tl']}`}></div>
                <div className={`${css.mark} ${css['mark--tr']}`}></div>
                <div className={`${css.mark} ${css['mark--br']}`}></div>
                <div className={`${css.mark} ${css['mark--bl']}`}></div>
            </>
        }
        {children}</Element>)

}