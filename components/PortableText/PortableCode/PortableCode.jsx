import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import css from './PortableCode.module.scss';

export const PortableCode = ({ value, isInline }) => {

    console.log(value);

    const { language, code, filename } = value;

    const style = {
        ...theme,
        "pre[class*=\"language-\"]": {
            ...theme["pre[class*=\"language-\"]"],
            "margin": 0,
            "font-size": "var(--step-0)",
            "background": "var(--color-grey-1200)"
        },
        "code[class*=\"language-\"]": {
            ...theme["code[class*=\"language-\"]"],
            "font-size": "var(--step-0)",
        },

    }

    return (
        <div className={css.code}>
            {filename &&
                <div className={css.code_file}>{filename}</div>
            }
            <div className={css.code_syntax}>
                <SyntaxHighlighter language={language} style={style}>
                    {code}
                </SyntaxHighlighter>
            </div>


        </div>
    )

}