import React from "react"
import styles from "./styles.module.css"
import userPhoto from '../../assets/images/male-avatar.png'
import {NavLink} from "react-router-dom"

let User = ({user, followingInProgress, follow, unfollow}) => {
  return (
    <div className={styles.user}>
      <div className={styles.avaInfo}>
        <NavLink to={`/profile/${user.id}`}>
          <img 
            src={user.photos.small != null ? user.photos.small : userPhoto}
            key={user.id}
            className={styles.userPhoto} alt='little pic'/>
        </NavLink>
        {user.followed 
          ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            unfollow(user.id)
            }}>Unfollow</button>
            
          : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            follow(user.id)
            }}>Follow</button>
        }
      </div>
      <div>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
      </div>
    </div>)
}

export default User;