import React from "react";
import {Navigate} from "react-router-dom";
import AddMessageForm from "./DialogItem/AddMessageForm";

const Dialogs = (props) => {
    if (!props.isAuth) return <Navigate to={"/login"}/>

    return (
        <div>
            {props.dialogs.map(d =>
                    <div key={d.id}>
                        {d.name}
                    </div>
                )}
            {props.messages.map(m =>
                    <div key={m.id}>
                        {m.message}
                    </div>
                )}
            <AddMessageForm {...props}/>
        </div>
    );
}

export default Dialogs
