import css from "./Button.module.scss";

export const Button = (props) => {

    const { children, element: Element = 'button', variant = 'fill', ...otherProps } = props;
    const classNames = [css.button, css[`button--${variant}`]];


    return (<Element className={classNames.join(' ')} {...otherProps} >
        <div className={`${css.mark} ${css['mark--tl']}`}></div>
        <div className={`${css.mark} ${css['mark--tr']}`}></div>
        <div className={`${css.mark} ${css['mark--br']}`}></div>
        <div className={`${css.mark} ${css['mark--bl']}`}></div>
        {children}</Element>)

}