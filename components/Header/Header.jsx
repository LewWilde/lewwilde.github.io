import { Container } from "@/components/Layout/Container";
import { Imprint } from "./Imprint";
import css from "./Header.module.scss";

export const Header = () => {

    return (
        <header>
            <Container>
                <div className={css.header_bar}>
                    <Imprint />
                </div>
            </Container>
        </header>)

}