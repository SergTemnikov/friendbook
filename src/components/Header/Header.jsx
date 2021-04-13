import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <h3 className={s.mainTitle}>My buddiez</h3>
      <div className={s.loginBlock}>
        { 
          props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>   
          : null
        }
      </div>
    </header>
  )
}

export default Header;