import React from "react";
import '../styles/Avatar.scss';
import propfileAvatar from '../img/profile-avatar.png'

const Avatar = ({ avatar }) => {
    return (
        <div className="avatar">
            <div className="avatar__img">
                <img src={avatar ? avatar : propfileAvatar} alt="avatar" />
            </div>
        </div>
    )
}
export default Avatar;