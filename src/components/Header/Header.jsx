import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>

            <img src='https://seeklogo.com/images/C/company-name-logo-09881CAD1A-seeklogo.com.png'/>
            <h3 className={s.mainTitle}>.friendbook</h3>
        </header>
    )
}

export default Header;