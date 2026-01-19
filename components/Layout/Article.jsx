import css from './Article.module.scss'

export const Article = ({ children, position = 'left', className }) => {

    const classes = [css.article, css[`article--position-${position}`]];

    if (className) {
        classes.push(className);
    }

    return (<article className={classes.join(' ')}>
        {children}
    </article>)

}


const Content = ({ children, className }) => {

    const classes = [css.article_content];

    if (className) {
        classes.push(className);
    }

    return (<div className={classes.join(' ')}>
        {children}
    </div>)

}

Article.Content = Content;