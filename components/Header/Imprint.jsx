import Link from 'next/link'
import css from './Imprint.module.scss';

export const Imprint = () => {

    return (
        <Link href="/" className={css.imprint}>
            <div className={`${css.mark} ${css['mark--tl']}`}></div>
            <div className={`${css.mark} ${css['mark--tr']}`}></div>
            <div className={`${css.mark} ${css['mark--br']}`}></div>
            <div className={`${css.mark} ${css['mark--bl']}`}></div>
            <span>Lew<span className={css.separator} aria-hidden="true">_</span>Wilde</span>
        </Link>
    )

}