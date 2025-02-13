import css from './PostMeta.module.scss'

export const PostMeta = ({ children }) => {

    return (<div className={css.postMeta_wrap}>
        {children}
    </div>)

}

const Block = ({ title, children }) => {

    return (<div className={css.postMeta}>
        <span className={css.postMeta_title}>{title}</span>
        {children}</div>)
}

PostMeta.Block = Block;