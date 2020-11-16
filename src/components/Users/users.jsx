import React from "react";
import styles from "./styles.module.css";
import userPhoto from "../../assets/images/male-avatar.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.page}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div className={styles.users} key={u.id}>
                        <div>
                            <div className={styles.avaInfo}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
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