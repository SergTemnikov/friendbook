import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let newMessage = newMessageElement.current.value;
        alert(newMessage);
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div>
            <div>
                <h2>Messages</h2>
            </div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <textarea ref={newMessageElement} className={s.newMessageText}></textarea>
            <button onClick={addNewMessage} className={s.newMessageBtn}>Add new message</button>
        </div>
    )
}

export default Dialogs;