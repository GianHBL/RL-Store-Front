import React from 'react';
import styles from './navbar.module.css';

import Search from '../search/search';

const NavBar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        Logo
                    </div>
                    <div className={styles.find}>
                        <Search/>
                    </div>
                    <div className={styles.options}>
                        options
                    </div>
                </div>
                <div className={styles.bot}>
                    <ul className={styles.nav}>
                        <li>
                            Novidades
                        </li>
                        <li>
                            Feminino
                        </li>
                        <li>
                            Masculino
                        </li>
                        <li>
                            Infantil
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;