import React from "react";
import Preloader from "../../common/Preloader/Preloader.js";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/person.png"
import styles from "../profile.module.css"

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
       if (e.target.files.length) {
           savePhoto(e.target.files[0]);
       }
    }

    return (
        <div>
            <div>
                Профиль пользователя {profile.fullName} (id: {profile.userId})
            </div>
            <div>
                <img className={styles.mainPhoto} src={profile.photos.large || userPhoto}/>
                {isOwner &&
                    <div>
                        <input type={"file"} onChange={onMainPhotoSelected}/>
                    </div>}
                <p>{profile.aboutMe}</p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>

    )
}

export default ProfileInfo