import css from './Container.module.scss';

export const Container = ({ children }) => {

    return (<div className={css.container}>
        {children}
    </div>)

}

