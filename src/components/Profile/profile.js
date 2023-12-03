import s from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className={s.ProfileBlock}>
            <h3>My profile</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>
                        Add post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile