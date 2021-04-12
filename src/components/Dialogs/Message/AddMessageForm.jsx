import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormControl/FormControl'
import { required, maxLengthCreator } from '../../../utils/validators/index'

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
        component={Textarea} 
        name='newMessageBody' 
        placeholder='Enter your message...'
        validate={[required, maxLength100]}/>
        <div>
            <button>Add new message</button>
        </div>
    </form>
  )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

