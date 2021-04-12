import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Login page</h1>
      <hr/>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login