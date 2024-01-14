import React from "react";
import styles from "./users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
                    followed: false,
                    fullName: "Dmitry",
                    status: "I'm boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2, photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
                    followed: false,
                    fullName: "Svetlana",
                    status: "I'm lector",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
                    followed: true,
                    fullName: "Maxim",
                    status: "Team-lead",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 4, photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
                    followed: false,
                    fullName: "Victor",
                    status: "I'm student",
                    location: {city: "Lublin", country: "Poland"}
                },
            ]
        )
    }
debugger
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;