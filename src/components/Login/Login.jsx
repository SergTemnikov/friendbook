import React from 'react'
import { reduxForm } from 'redux-form'

export const LoginForm = (props) => {
  return (
      <form>
        <div>
          <input placeholder={'Login'}/>
        </div>
        ---------------------
        <div>
          <input placeholder={'Password'}/>
        </div>
        ---------------------
        <div>
          <input type={'checkbox'}/> Remember me
        </div>
        ---------------------
        <div>
          <button type={'submit'}>LOGIN</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'contact'})(LoginForm)

const Login = (props) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Login page</h1>
      <hr/>
      <LoginForm />
    </div>
  )
}

export default Login