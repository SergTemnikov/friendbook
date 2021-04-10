import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
  return (
    <div>
      <h4>Status</h4>
      <div>
        <span>{props.status}</span>
      </div>
      <div>
        <input value={props.status}/>
      </div>
    </div>
  )
}

export default ProfileStatus
