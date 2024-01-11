import s from "./dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "../Messages/message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d=> <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map( m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onChangeMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={ onChangeMessageChange }
                                   placeholder="Enter your message hear" cols="30" rows="10"></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>

        </div>
    );
}


export default Dialogs
