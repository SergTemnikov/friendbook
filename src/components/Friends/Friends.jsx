import React from 'react';
import Friend from "./Friend/Friend";
import s from './Friends.module.css'

const Friends = (props) => {

    let friendsNames = props.state.friends.map(f => <Friend friendName={f.friendName}/>);

    return (
        <div className={s.friendsList}>
            {friendsNames}
        </div>
    )
};
export default Friends;