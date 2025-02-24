import css from './Pagination.module.scss'
import { Button } from '@/components/Buttons/Button'
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

export const Pagination = ({ children }) => {


    return (
        <div className={css.pagination}>
            {children}
        </div>
    )
}

const NextButton = (props) => {
    return (<Button {...props} size={'small'} showMarks={false}><CaretRight weight="bold" size={"1em"} /></Button>)
}
Pagination.Next = NextButton;

const PrevButton = (props) => {
    return (<Button {...props} size={'small'} showMarks={false}><CaretLeft weight="bold" size={"1em"} /></Button>)
}
Pagination.Prev = PrevButton;

const PageNumbers = ({ page, pageCount }) => {

    return (<div className={css.pagenumbers}>Page <span className={css.pagenumbers_current}>{page}</span> of {pageCount}</div>)
}
Pagination.PageNumbers = PageNumbers;