import React from 'react'
import style from './FormControl.module.css'

const FormControl = ({input, meta, el, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')} >
      <div>
        {React.createElement(el, {...input, ...props })}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => (<FormControl {...props} el={'textarea'}/>)
export const Input = (props) => (<FormControl {...props} el={'input'}/>)
