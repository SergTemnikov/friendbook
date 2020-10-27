import {rerenderEntireTree} from "../render";

let state = {
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
            {id: '5', name: 'Dima'}]
    },
    sideBar: {
        friends: [
            {id: 1, friendName: 'Serg'},
            {id: 2, friendName: 'Max'},
            {id: 3, friendName: 'Alex'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}



export default state;