import s from "./messages.module.css"

export const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

export default Message