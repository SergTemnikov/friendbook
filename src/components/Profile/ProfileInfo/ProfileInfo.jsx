/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
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

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false))
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.profileHeader}>
          <div>
            <img src={profile.photos.large || FakePic} alt='current user pic'/>
            <div>
              <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            {isOwner && <div><input type='file' onChange={e => mainPhotoSelected(e)}/></div>}
            <br/>
          </div>
          {editMode 
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
              : <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => {setEditMode(true)}}/>}
        </div>
      </div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
  return (
    <div>
      {isOwner && <button style={{float: 'right'}} onClick={toEditMode}>Edit profile</button>}
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
    </div> 
  )
}

export const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={s.contact}><b>{contactTitle}: </b>{contactValue}</div>
  )
}

export default ProfileInfo;