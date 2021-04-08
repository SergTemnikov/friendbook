import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        console.log(props);
    }

    return (
        <div>
            {/* <div>
                <img className={s.topBg} src='https://pbs.twimg.com/media/DFwTsX2VoAIC2UJ.jpg'/>
            </div> */}
            <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.fullName}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;