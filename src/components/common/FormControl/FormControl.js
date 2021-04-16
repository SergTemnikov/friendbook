import React from 'react'
import {Field} from 'redux-form'
import style from './FormControl.module.css'

const FormControl = ({input, meta: { touched, error}, el, ...props}) => {
  const hasError = touched && error
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')} >
      <div>
        {React.createElement(el, {...input, ...props })}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const CreateField = (component, name, placeholder, validators, props = {}, text = '') => (
  <div>
    <Field 
      component={component} 
      name={name} 
      placeholder={placeholder} 
      validate={validators} 
      {...props}/>
      <span>{text}</span>
  </div>
)

export const Textarea = (props) => (<FormControl {...props} el={'textarea'}/>)
export const Input = (props) => (<FormControl {...props} el={'input'}/>)
