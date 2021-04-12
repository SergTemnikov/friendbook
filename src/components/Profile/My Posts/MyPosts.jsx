import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/index'
import {Textarea} from '../../common/FormControl/FormControl'

const maxLength50 = maxLengthCreator(50)

const MyPosts = (props) => {
  let postsElements = props.posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>);

  const onAddNewPost = (value) => {
    props.addPost(value.newPostTextForm)
  }

  

  return (
    <div className={s.postsBlock}>
      <h3 className={s.myPostsTitle}>My Posts</h3><br/>
      <NewPostTextFormRedux onSubmit={onAddNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const NewPostText = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
          component={Textarea} 
          name='newPostTextForm' 
          placeholder='Enter new post message...'
          validate={[required, maxLength50]}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const NewPostTextFormRedux = reduxForm({form: 'newPostTextForm'})(NewPostText)

export default MyPosts;