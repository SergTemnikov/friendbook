/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
// import s from './ProfileInfo.module.css'
import { Row, Col, Button, Layout } from 'antd'
import Preloader from '../../common/Preloader/preloader'
import ProfileDataForm from './ProfileDataForm'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import FakePic from '../../../img/fake-pic.png'


const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto, saveProfile}) => {
  if (!profile) {
    return <Preloader />
  }

  let [editMode, setEditMode] = useState(false)

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const toProfileMode = () => {
    setEditMode(false)
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false))
  }

  return (
    <Layout style={{backgroundColor: 'white'}}>
      <Row>
        <Col>
          <div>
            <img src={profile.photos.large || FakePic} alt='current user pic'/>
            {isOwner 
              && <div>
                  <input style={{marginTop: 15}} type='file' onChange={e => mainPhotoSelected(e)}/>
                </div>}
          </div>
        </Col>
        <Col style={{padding: '0 0 0 10px'}}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          {editMode
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} toProfileMode={toProfileMode}/>
              : <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => {setEditMode(true)}}/>}
        </Col>
      </Row>
      
    </Layout>
  )
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
  return (
    <div>
      <div>
        <br/>
        <b>About me: </b>{profile.aboutMe}
      </div>
      <div>
        <b>Full name: </b>{profile.fullName}
      </div>
      <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'YES' : 'NO'}</div>
      {profile.lookingForAJob && <div>My skills: {profile.lookingForAJobDescription}</div>}
      <br/>
      <b>Contacts: </b> 
      {Object.keys(profile.contacts).map(key => {
        return <Contact 
          key={key} 
          contactTitle={key} 
          contactValue={profile.contacts[key]}/>
      })}
      <div style={{textAlign: 'right'}}>
        {isOwner && <Button type='primary' onClick={toEditMode}>Edit profile</Button>}
      </div>
      
    </div> 
  )
}

export const Contact = ({contactTitle, contactValue}) => {
  return (
    <div><b>{contactTitle}: </b>{contactValue}</div>
  )
}

export default ProfileInfo;