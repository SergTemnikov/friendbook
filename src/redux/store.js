import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likesCount: 15},
                {id: 2, message: 'Its my first post', likesCount: 20},
                {id: 3, message: 'Its my second post', likesCount: 3},
                {id: 4, message: 'Its my third post', likesCount: 24},
            ],
            newPostText: 'IT-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;