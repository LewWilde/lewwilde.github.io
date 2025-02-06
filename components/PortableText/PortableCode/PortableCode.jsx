import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Pill } from '@/components/Pill/Pill';
import css from './PortableCode.module.scss';

export const PortableCode = ({ value, isInline }) => {

    const { language, code, filename } = value;

    const style = {
        ...theme,
        "pre[class*=\"language-\"]": {
            ...theme["pre[class*=\"language-\"]"],
            "margin": 0,
            "fontSize": "var(--step-0)",
            "background": "transparent"
        },
        "code[class*=\"language-\"]": {
            ...theme["code[class*=\"language-\"]"],
            "fontSize": "var(--step-0)",
        },

    }

    return (
        <div className={css.code}>
            <div className={css.code_wrap}>

                <div className={css.code_meta}>
                    {filename && <span className={css.code_file}>{filename}</span>}

                    <Pill className={css.code_language}>{language}</Pill>
                </div>
                <SyntaxHighlighter language={language} style={style}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )

}