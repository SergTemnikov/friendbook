import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Input} from '../common/FormControl/FormControl'
import {required, maxLengthCreator} from '../../utils/validators/index'
import style from '../common/FormControl/FormControl.module.css'

const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input} name={'email'} placeholder={'Login'} validate={[required, maxLength30]}/>
        </div>
        -------------------------
        <div>
          <Field component={Input} name={'password'} placeholder={'Password'} validate={[required, maxLength20]} type={'password'}/>
        </div>
        -------------------------
        <div>
          <Field component={Input} name={'rememberMe'} type={'checkbox'}/> 
          <span>Remember me</span> 
        </div>
        --------------
        <div>
          <button type={'submit'}>LOGIN</button>
        </div>
        {props.error && <div className={style.commonError}>{props.error}</div>}
        
      </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm)