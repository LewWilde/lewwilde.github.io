import { LinkPrimitive } from "./LinkPrimitive";
import css from "./Link.module.scss";

export default function Link({ children, ...props }) {

    const classNames = [css.link];

    return (<LinkPrimitive className={classNames.join(' ')} {...props}>{children}</LinkPrimitive>)

}