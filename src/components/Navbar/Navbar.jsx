import React from 'react'
import s from './Navbar.module.css'
import {Menu} from 'antd'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux'

const Navbar = (props) => {

  return (
    <Menu 
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item>
        <NavLink to='/profile' activeClassName={s.activeLink}>My profile</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
      </Menu.Item>
      {
        props.isAuth ? 
          null : <Menu.Item>
           <NavLink to='/login'>Login</NavLink>
         </Menu.Item>
      }            
    </Menu>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId
})

export default connect(mapStateToProps, null)(Navbar)