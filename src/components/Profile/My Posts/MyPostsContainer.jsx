import React from 'react';
import MyPosts from "./MyPosts";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;