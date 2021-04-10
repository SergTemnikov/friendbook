import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src='https://upload.wikimedia.org/wikipedia/ru/5/53/Garena_Free_Fire_Logo.png' alt='main pic'/>
      </div> */}
      <div className={s.descriptionBlock}>
        <div className={s.profileHeader}>
          <div>
            <img src={props.profile.photos.large} alt='current user pic'/>
          </div>
          <div>
            <ProfileStatus status={'Hello, my Friends!!!'} />
          </div>
          
        </div>
        <div>
          {props.profile.aboutMe}
        </div>
        <div>
          {props.profile.fullName}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;