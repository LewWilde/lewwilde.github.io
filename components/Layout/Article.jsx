import css from './Article.module.scss'

export const Article = ({ children }) => {

    return (<article className={css.article}>
        {children}
    </article>)

}


const Content = ({ children }) => {

    return (<div className={css.article_content}>
        {children}
    </div>)

}

Article.Content = Content;