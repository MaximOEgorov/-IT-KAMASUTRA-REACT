import React from "react";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/person.png"
import styles from "../profile.module.css"

const ProfileInfo = ({isOwner, profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    Профиль пользователя {profile.fullName} (id: {profile.userId})
                </div>
                <div>
                    <img className={styles.mainPhoto} src={profile.photos.large || userPhoto}/>
                    {isOwner &&
                    <div>
                        <input type={"file"}/>
                    </div>}
                    <p>{profile.aboutMe}</p>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>

        )
    }
}

export default ProfileInfo