import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://seeklogo.com/images/C/company-name-logo-09881CAD1A-seeklogo.com.png' alt='logo'/>
      <h3 className={s.mainTitle}>My buddies</h3>
      <div className={s.loginBlock}>
        { 
          props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Log out, buddy</button></div>   
          : null
        }
      </div>
    </header>
  )
}

export default Header;