import { Container } from "@/components/Layout/Container";
import { Imprint } from "./Imprint";
import css from "./Header.module.scss";
import { Nav } from "@/components/Nav/Nav";

export const Header = ({ navButton = <Nav /> }) => {

    return (
        <header className={css.header}>
            <Container>
                <div className={css.header_bar}>
                    <div className={css.header_imprint}>
                        <Imprint />
                    </div>
                    <div className={css.header_nav}>
                        {navButton}
                    </div>
                </div>
            </Container>
        </header>)

}