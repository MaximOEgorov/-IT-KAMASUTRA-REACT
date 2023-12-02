import s from "./dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Dialogs 1
                </div>
                <div className={s.dialog}>
                    Dialogs 2
                </div>
                <div className={s.dialog}>
                    Dialogs 3
                </div>
                <div className={s.dialog}>
                    Dialogs 4
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi!!</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Yo....</div>
            </div>
        </div>
    );
}

export default Dialogs
