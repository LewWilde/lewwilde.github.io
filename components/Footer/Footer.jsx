import css from './Footer.module.scss';
import { Container } from '../Layout/Container';

export const Footer = () => {

    const getHash = () => {
        const { VERCEL_URL } = process.env;
        if (!VERCEL_URL) { return '---------' }

        const hash = VERCEL_URL.split('-')[1];

        return hash;
    }

    return (
        <div className={css.footer}>
            <Container>
                <div className={css.footer_build}>Build:{getHash()}</div>
            </Container>
        </div>
    )
}