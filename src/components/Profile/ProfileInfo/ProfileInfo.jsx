import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import FakePic from '../../../img/fake-pic.png'

const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.profileHeader}>
          <div>
            <img src={profile.photos.large || FakePic} alt='current user pic'/>
            
            { 
              isOwner 
                && (
                  <div>
                    <input type='file' onChange={e => mainPhotoSelected(e)}/>
                  </div>
                  )
            }
          </div>
          <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          </div>
          
        </div>
        <div>
          {profile.aboutMe}
        </div>
        <div>
          {profile.fullName}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;