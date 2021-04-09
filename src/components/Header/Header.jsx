import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>

            <img src='https://seeklogo.com/images/C/company-name-logo-09881CAD1A-seeklogo.com.png' alt='logo'/>
            <h3 className={s.mainTitle}>.friendbook</h3>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;