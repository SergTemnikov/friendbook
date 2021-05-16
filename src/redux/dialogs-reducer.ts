const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name?'},
        {id: 4, message: 'Hey, man!!!'},
        {id: 5, message: 'Thats dope!!'}
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Serg'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Mary'},
        {id: 5, name: 'Dima'}] as Array<DialogType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): 
SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer



