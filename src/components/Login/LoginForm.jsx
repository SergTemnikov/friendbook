import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Input} from '../common/FormControl/FormControl'
import {required, maxLengthCreator} from '../../utils/validators/index'

const maxLength15 = maxLengthCreator(15)
const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input} name={'login'} placeholder={'Login'} validate={[required, maxLength15]}/>
        </div>
        ---------------------
        <div>
          <Field component={Input} name={'password'} placeholder={'Password'} validate={[required, maxLength20]}/>
        </div>
        ---------------------
        <div>
          <Field component={Input} name={'rememberMe'} type={'checkbox'}/> Remember me
        </div>
        ---------------------
        <div>
          <button type={'submit'}>LOGIN</button>
        </div>
      </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm)