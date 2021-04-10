import React from "react";
import styles from "./styles.module.css";
import * as axios from 'axios'
import userPhoto from "../../assets/images/male-avatar.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={styles.page}>
        {pages.map((p) => {
          return <span 
                    className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {props.onPageChanged(p)}}>{p}
                </span>
        })}
      </div>
        {
          props.users.map(u =>
            <div className={styles.users} key={u.id}>
              <div>
                <div className={styles.avaInfo}>
                    <NavLink to={'/profile/ ' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                key={u.id}
                              className={styles.userPhoto} alt='little pic'/>
                    </NavLink>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id)
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '8d11dce2-fee2-4ed0-90f2-c493af9d9bb1'
                          }
                        })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                              props.unfollow(u.id)
                            } 
                            props.toggleFollowingInProgress(false, u.id)
                          })
                        }}>Unfollow</button>
                        
                      : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id)
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                          withCredentials: true,
                          headers: {
                            'API-KEY': '8d11dce2-fee2-4ed0-90f2-c493af9d9bb1'
                          }
                        })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                              props.follow(u.id)
                            } 
                            props.toggleFollowingInProgress(false, u.id)
                          })
                        }}>Follow</button>
                    }
                </div>
              </div>
              <div>
              <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
              </span>
                  <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
              </span>
              </div>
            </div>)
        }
    </div>)
}

export default Users;