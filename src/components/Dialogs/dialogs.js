import React from "react";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let newMessageBody = props.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessageCreator();
    }
    let onChangeMessageChange = (e) => {
        e.preventDefault();
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    }

    if (!props.isAuth) return <Navigate to={"/login"} />

    return (
        <div>
            {
                props.dialogs.map(d => <div key={d.id}>
                        {d.name}
                    </div>
                )}
            {
                props.messages.map(m => <div key={m.id}>
                        {m.message}
                    </div>
                )}
            <div><textarea value={newMessageBody}
                           onChange={onChangeMessageChange}
                           placeholder="Enter your message hear" cols="30" rows="10"></textarea></div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>

        </div>
    );
}


export default Dialogs
