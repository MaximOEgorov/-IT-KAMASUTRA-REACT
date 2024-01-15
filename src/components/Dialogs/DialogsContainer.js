import {connect} from "react-redux";
import Dialogs from "./dialogs.js";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dialogs)
