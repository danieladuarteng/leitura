import { RECEIVE_POSTS, NEW_POST, DELETE_POST, GET_POSTS_FOR_CATEGORY } from "../actions/posts";

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case NEW_POST:
            const post = action
            return {
                ...state,
                [action.post.id]: action.post,
            }
        case DELETE_POST:
            const postId = Object.keys(state).filter(item =>
                state[item].id === action.post.id)
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    deleted: true
                }
            }
        case GET_POSTS_FOR_CATEGORY:
            return {
                ...action.posts,
            }
        // const deletedKey = Object.keys(state).find(key => (
        //     state[key].id === action.post.id
        // ))
        // const newList = Object.keys(state).reduce((object, key) => {
        //     if (key !== deletedKey) {
        //         object[key] = state[key]
        //     }
        //     return object
        // }, {})
        // return {
        //     ...newList
        // }
        default:
            return state
    }
}