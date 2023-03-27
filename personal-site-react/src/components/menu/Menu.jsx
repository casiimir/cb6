import {useState} from "react";

import styles from "./style.module.scss";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div onClick={toggleMenu} className={`${styles.burger} ${isOpen && styles.burger__open}`}>
            {/* burger */}
                <div className={styles.center}>
                    <div></div>
                </div>
            </div>
            {/* navigation */}
            <div className={`${styles.menu} ${isOpen && styles.menu__open}`}>
                <ul className={styles.items}>
                    <li onClick={() => closeMenu()} className={styles.item}><a href="about" title="about">{"About"}</a></li>
                    <li onClick={() => closeMenu()} className={styles.item}><a href="#" title="skills">{"Skills"}</a></li>
                    <li onClick={() => closeMenu()} className={styles.item}><a href="#" title="my project">{"My Projects"}</a></li>
                    <li onClick={() => closeMenu()} className={styles.item}><a href="#" title="contacts">{"Contacts"}</a></li>
                </ul>
            </div>
        </>
    )
}

export default Menu;