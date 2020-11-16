const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'Its my first post', likesCount: 20},
        {id: 3, message: 'Its my second post', likesCount: 3},
        {id: 4, message: 'Its my third post', likesCount: 24},
    ],
    newPostText: 'IT-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
            case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;

