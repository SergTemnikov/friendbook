import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.topBg} src='https://pbs.twimg.com/media/DFwTsX2VoAIC2UJ.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descpription
            </div>
        </div>
    )
}

export default ProfileInfo;