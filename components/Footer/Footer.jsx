import css from './Footer.module.scss';

export const Footer = () => {

    const getHash = () => {
        const { VERCEL_URL } = process.env;
        if (!VERCEL_URL) { return '---------' }

        const hash = VERCEL_URL.split('-')[1];

        return hash;
    }

    const gradientDark = ['grey-1200', 'grey-1100', 'grey-1000', 'grey-900', 'grey-800'];
    const gradientLight = ['grey-700', 'grey-600', 'grey-500', 'grey-400', 'grey-300'];
    const gradientAccent = ['yellow-500', 'yellow-400', 'yellow-300', 'yellow-200', 'yellow-100'];

    return (
        <div className={css.footer}>
            <div className={css.hash}></div>
            <div className={css.swatch_row}>
                <div className={css.swatch_col}>
                    <div className={css.swatch}>
                        {gradientDark.map(c => <div key={c} className={`${css.swatch_cell} ${css['swatch_cell--bg-' + c]}`}></div>)}
                    </div>
                    <div className={css.swatch}>
                        {gradientLight.map(c => <div key={c} className={`${css.swatch_cell} ${css['swatch_cell--bg-' + c]}`}></div>)}
                    </div>
                </div>
                <div className={css.swatch_col}>
                    <div className={css.swatch}>
                        {gradientAccent.map(c => <div key={c} className={`${css.swatch_cell} ${css['swatch_cell--bg-' + c]}`}></div>)}
                    </div>
                    <div className={css.swatch}>

                        <div className={`${css.swatch_cell} ${css['swatch_cell--bg-grey-1200']} ${css['swatch_cell--wide']}`}>
                            <div className={css.copyright} >© - Just credit me. Build:{getHash()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}