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
    <div style={{textAlign: 'center'}}>
      <div>
        <h1 style={{paddingBottom: '10px'}}>LOGIN</h1>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  } 
} 

export default connect(mapStateToProps, {login})(Login)