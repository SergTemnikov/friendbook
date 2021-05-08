import React from 'react'
import { reduxForm } from 'redux-form'
import {CreateField, Input} from '../common/FormControl/FormControl'
import {required, maxLengthCreator} from '../../utils/validators/index'
import style from '../common/FormControl/FormControl.module.css'

const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField(Input, 'email', 'Login', [required, maxLength30])}
      -------------------------
      {CreateField(Input, 'password', 'Password', [required, maxLength20], {type: 'password'})}
      -------------------------
      {CreateField(Input, 'password', null, [], {type: 'checkbox'}, 'Remember me')}
      --------------
      <div>
        {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
        {captchaUrl && CreateField(Input, 'captcha', 'Enter symbols from picture', [required])}
      </div>
      <div>
        <button type={'submit'}>LOGIN</button>
      </div>
      {error && <div className={style.commonError}>{error}</div>}
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm)