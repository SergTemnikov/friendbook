import React from 'react'
import { List } from 'antd'
import Paginator from "../common/Paginator/Paginator"
import User from "./user"
// import styles from './styles.module.css'



const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  return (
    <div>
      <List>
        {users.map(user => <User 
            user={user} 
            key={user.id} 
            followingInProgress={props.followingInProgress} 
            follow={props.follow} 
            unfollow={props.unfollow}/>)}
        
      </List>

      
    <div style={{textAlign: 'center', marginTop: 15}}>
      <Paginator 
          currentPage={currentPage} 
          onPageChanged={onPageChanged} 
          pageSize={pageSize} 
          totalItemsCount={totalUsersCount}/>
    </div>
    </div>
    )
}

export default Users;