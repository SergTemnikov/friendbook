import React from "react"
// import styles from "./styles.module.css"
import { Button, List, Avatar, Typography } from 'antd'
import userPhoto from '../../assets/images/male-avatar.png'
import {NavLink} from "react-router-dom"

let User = ({user, followingInProgress, follow, unfollow}) => {
  return (

  <List.Item key={user.id}>
    <NavLink to={`/profile/${user.id}`} style={{display: 'flex', alignItems: 'center'}}>
      <Avatar size={64} src={user.photos.small != null ? user.photos.small : userPhoto}/>
      <div>
        <Typography.Title level={5}>{user.name}</Typography.Title>
        <span level={1}>{user.status || 'No status'}</span>
      </div>
    </NavLink>

    <div>
      {user.followed 
            ? <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollow(user.id)
              }}>Unfollow</Button>
              
            : <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id)
              }}>Follow</Button>
          }
    </div>
  </List.Item>
        
        )
}



export default User;