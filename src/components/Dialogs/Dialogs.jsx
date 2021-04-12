import React from 'react';
import {Redirect} from 'react-router-dom'
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from './Message/AddMessageForm'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    const addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

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
                <AddMessageForm onSubmit={addNewMessage}/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Dialogs;