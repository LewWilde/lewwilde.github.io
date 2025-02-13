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

const Main = ({ children, className }) => {

    const classNames = [css.main];
    if (className) { classNames.push(className) };

    return (<main className={classNames.join(' ')}>
        {children}
    </main>)

}
Container.Main = Main;
