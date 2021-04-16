import React from "react"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  return (
    <div>
        {users.map(user => <User 
          user={user} 
          key={user.id} 
          followingInProgress={props.followingInProgress} 
          follow={props.follow} 
          unfollow={props.unfollow}/>)}

        <Paginator 
        currentPage={currentPage} 
        onPageChanged={onPageChanged} 
        pageSize={pageSize} 
        totalUsersCount={totalUsersCount}/>
    </div>)
}

export default Users;