const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name?'},
        {id: 4, message: 'Hey, man!!!'},
        {id: 5, message: 'Thats dope!!'}],
    dialogs: [
        {id: 1, name: 'Serg'},
        {id: '2', name: 'Max'},
        {id: '3', name: 'Alex'},
        {id: '4', name: 'Mary'},
        {id: '5', name: 'Dima'}],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;



