import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg'/>
            {props.message}
            <div>
                <span className={s.likeName}>Like</span> {props.likesCount}
            </div>
        </div>


        )
}

export default Post;