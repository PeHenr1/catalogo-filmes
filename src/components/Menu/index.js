import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Início</MenuLink>
                <MenuLink to="/criar">Criar</MenuLink>
                <MenuLink to="/alterar">Alterar</MenuLink>
                <MenuLink to="/apagar">Apagar</MenuLink>
            </nav>
        </header>
    );
}