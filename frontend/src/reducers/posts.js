import { RECEIVE_POSTS, NEW_POST, DELETE_POST } from "../actions/posts";
import { object } from "prop-types";

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
            const deletedKey = Object.keys(state).find(key => (
                state[key].id === action.post.id
            ))
            const newList = Object.keys(state).reduce((object, key) => {
                if (key !== deletedKey) {
                    object[key] = state[key]
                }
                return object
            }, {})
            return {
                ...newList
            }
        default:
            return state
    }
}