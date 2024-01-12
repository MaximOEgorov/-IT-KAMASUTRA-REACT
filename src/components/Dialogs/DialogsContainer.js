import s from "./dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "../Messages/message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;
    let SendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let ChangeMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
            <Dialogs dialogsElements={dialogsElements} messagesElements={messagesElements}
                 newMessageBody={newMessageBody} SendMessageClick={SendMessageClick}  updateNewMessage={ChangeMessageChange}  />

    );
}


export default DialogsContainer
