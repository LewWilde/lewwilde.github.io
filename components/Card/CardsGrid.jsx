import css from './CardsGrid.module.scss';

export const CardsGrid = ({ children }) => {

    return (
        <div className={css.grid}>
            {children}
        </div>
    )


}