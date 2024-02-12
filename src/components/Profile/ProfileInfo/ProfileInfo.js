import React from "react";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    Профиль пользователя {profile.fullName} (id: {profile.userId})
                </div>
                <div>
                    <img src={profile.photos.large}/>
                    <p>{profile.aboutMe}</p>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>

        )
    }
}

export default ProfileInfo