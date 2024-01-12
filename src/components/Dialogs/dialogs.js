import s from "./dialogs.module.css"

const Dialogs = (props) => {
    let newMessageBody = props.newMessageBody;
    let onSendMessageClick = () => {
        props.SendMessageClick();
    }
    let onChangeMessageChange = (e) => {
        e.preventDefault();
        let body = e.target.value;
        props.updateNewMessage(body);
    }

    return (
        <div>
            <div>
                {props.dialogsElements}
            </div>
            <div>
                <div>{props.messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onChangeMessageChange}
                                   placeholder="Enter your message hear" cols="30" rows="10"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Dialogs
