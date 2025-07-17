import { Container } from "@/components/Layout/Container";
import { Imprint } from "./Imprint";
import css from "./Header.module.scss";
import { Nav } from "@/components/Nav/Nav";

export const Header = () => {

    return (
        <header>
            <Container>
                <div className={css.header_bar}>
                    <Imprint />
                </div>
                <Nav />
            </Container>
        </header>)

}