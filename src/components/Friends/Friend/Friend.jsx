import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {

    return (
        <div>
            <div className={s.friendItem}>
                <img className={s.friendAva} src='https://avatarfiles.alphacoders.com/176/thumb-176948.jpg'/>
                <div className={s.friendName}>
                    {props.friendName}
                </div>
            </div>
        </div>
    )
};

export default Friend;