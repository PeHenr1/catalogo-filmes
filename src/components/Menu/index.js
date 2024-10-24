import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/create">Create</MenuLink>
                <MenuLink to="/update">Update</MenuLink>
                <MenuLink to="/delete">Delete</MenuLink>
            </nav>
        </header>
    );
}