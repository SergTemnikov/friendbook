import profileReducer, {addPostCreator, deletePost} from "./profile-reducer"

let state = {
  posts: [
  {id: 1, message: 'How are you?', likesCount: 15},
  {id: 2, message: 'Its my first post', likesCount: 20},
  {id: 3, message: 'Its my second post', likesCount: 3},
  {id: 4, message: 'Its my third post', likesCount: 24},
]}

test('length of posts should be incremented', () => {
  // Start data
  const action = addPostCreator('IT-KAMASUTRA.COM')
  
  // Action
  let newState = profileReducer(state, action)

  // Expectation
  expect(newState.posts.length).toBe(5)
  
});

test('value of message must be the same', () => {
  // Start data
  const action = addPostCreator('IT-KAMASUTRA.COM')
  
  // Action
  let newState = profileReducer(state, action)

  // Expectation
  expect(newState.posts[4].message).toBe('IT-KAMASUTRA.COM')
});

test('length of posts must be decremented after removing item', () => {
  // Start data
  const action = deletePost(1)
  
  // Action
  let newState = profileReducer(state, action)

  // Expectation
  expect(newState.posts.length).toBe(3)
});

test('length of posts must not be decremented, if ID is incorrect', () => {
  // Start data
  const action = deletePost(1000)
  
  // Action
  let newState = profileReducer(state, action)

  // Expectation
  expect(newState.posts.length).toBe(4)
});