import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import {login} from '../../redux/auth-reducer'

const Login = (props) => {

  const onSubmit = ({email, password, rememberMe}) => {
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  } 

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Login page</h1>
      <hr/>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  } 
} 

export default connect(mapStateToProps, {login})(Login)