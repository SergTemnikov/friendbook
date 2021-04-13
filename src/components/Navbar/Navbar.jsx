import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux'

const Navbar = (props) => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}>My profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
      </div>
      {
        props.isAuth ? 
          null : <div className={s.item}>
           <NavLink to='/login' activeClassName={s.activeLink}>Login</NavLink>
         </div>
      }            
    </nav>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId
})

export default connect(mapStateToProps, null)(Navbar)