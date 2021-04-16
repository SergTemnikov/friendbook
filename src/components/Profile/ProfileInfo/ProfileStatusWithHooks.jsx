import React, { useState } from 'react'

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  
  

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

    return (
      <div>
        <h4>Status is:</h4>
          { !editMode && <div>
            <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
          </div>}
        
        { editMode &&
          <div>
            <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
          </div>
        }
      </div>
    )
}

export default ProfileStatusWithHooks

