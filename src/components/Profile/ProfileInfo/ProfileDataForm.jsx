import React, {useState} from 'react'
import {CreateField, Input, Textarea} from '../../common/FormControl/FormControl'
import {reduxForm} from 'redux-form'
import s from './ProfileInfo.module.css'
import style from '../../common/FormControl/FormControl.module.css'
import { Modal } from 'antd'

const ProfileDataForm = ({profile, handleSubmit, error, toProfileMode}) => {

  const [isModalVisible, setIsModalVisible] = useState(true)

  const closeModal = () => {
    toProfileMode()
    setIsModalVisible(false)
  }

  const formSubmit = () => {
    handleSubmit()
    setIsModalVisible(false)
  }

  return (
    
      <form>
        <Modal
          visible={isModalVisible}
          onOk={formSubmit}
          onCancel={closeModal}
          okText='Save profile'
        >
          {error && <div className={style.commonError}>{error}</div>}
          <div>
            <br/>
            <b>About me: </b>{CreateField(Input, 'aboutMe', 'About me', [], null, '')}
            <b>Full name: </b>{CreateField(Input, 'fullName', 'Full Name', [], null, '')}
            <b>Looking for a job: </b>{CreateField(Input, 'lookingForAJob', 'Looking for a job', [], {type: 'checkbox'}, 'Yes')}
            <b>My skills: </b>{CreateField(Textarea, 'lookingForAJobDescription', 'Your skills', [], null, '')}
            <b>Contacts: </b> 
            {Object.keys(profile.contacts).map(key => {
              return <div key={key} className={s.contact}>
                <b>{key}</b>{CreateField(Input, 'contacts.' + key, key, [], null, '')}
              </div>
            })}
          </div>
        </Modal>
      </form>
  )
}

export default reduxForm({form: 'editProfile'})(ProfileDataForm)