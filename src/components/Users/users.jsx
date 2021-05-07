import React from "react"
import Paginator from "../common/Paginator/Paginator"
import User from "./user"
import styles from './styles.module.css'

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  return (
    <div className={styles.users}>
      <div>
        {users.map(user => <User 
            user={user} 
            key={user.id} 
            followingInProgress={props.followingInProgress} 
            follow={props.follow} 
            unfollow={props.unfollow}/>)}
      </div>
        
    <div>
      <Paginator 
          currentPage={currentPage} 
          onPageChanged={onPageChanged} 
          pageSize={pageSize} 
          totalItemsCount={totalUsersCount}/>
    </div>
    </div>)
}

export default Users;