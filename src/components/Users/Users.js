import React, {Component} from "react";
import styles from "./users.module.css"
import axios from "axios";

export default class Users extends Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    /*constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }*/

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{/*{u.location.city}*/}</div>
                            <div>{/*u.location.country*/}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

