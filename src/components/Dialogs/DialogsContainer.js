import s from "./dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "../Messages/message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs.js";
import StoreContext from "../../StoreContext";
import {useContext} from "react";

const DialogsContainer = (props) => {
    /*const {store, setStore} = useContext(StoreContext)
    let state = store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;
    let SendMessageClick = () => {
        store.dispatch(sendMessageCreator());
    }
    let ChangeMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
    }*/
    return (
            <Dialogs />
    );
}


export default DialogsContainer
