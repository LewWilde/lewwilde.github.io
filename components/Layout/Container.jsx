import css from './Container.module.scss';

export const Container = ({ size = 'container', children }) => {

    const classNames = [css.container]
    if (size === 'full') {
        classNames.push(css['container--full'])
    }

    return (<div className={classNames.join(' ')}>
        {children}
    </div>)

}

const Main = ({ children }) => {

    return (<main className={css.main}>
        {children}
    </main>)

}
Container.Main = Main;
