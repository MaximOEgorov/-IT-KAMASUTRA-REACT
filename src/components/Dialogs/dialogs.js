import s from "./dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "../Messages/message";

const Dialogs = (props) => {
    debugger
    let dialogsElements = props.state.dialogsPage.dialogs.map( d=> <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.dialogsPage.messages.map( m => <Message message={m.message} />)

    return (
        <div>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder="Enter your message hear" cols="30" rows="10"></textarea></div>
                </div>
            </div>

        </div>
    );
}


export default Dialogs
