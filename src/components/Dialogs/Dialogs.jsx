import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";




const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let newMessage = newMessageElement.current.value;
        alert(newMessage);
    }

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

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
                    <div>{messagesElements}</div>
                    <div className={s.newMsgBlock}>
                        <div>
                            <textarea value={newMessageBody} onChange={onNewMessageChange} className={s.newMessageText}>

                            </textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick} className={s.newMessageBtn}>Add new message</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;