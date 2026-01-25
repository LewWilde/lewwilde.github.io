import css from './Container.module.scss';

export const Container = ({ size = 'container', children }) => {

    const classNames = [css.container]
    if (size === 'full') {
        classNames.push(css['container--full'])
    }
    if (size === 'content') {
        classNames.push(css['container--content'])
    }

    return (<div className={classNames.join(' ')}>
        {children}
    </div>)

}
