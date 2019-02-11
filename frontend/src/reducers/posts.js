import { RECEIVE_POSTS, POST_DETAILS } from "../actions/posts";

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case POST_DETAILS:
            return {
                ...state,
                ...action.post
            }
        default:
            return state
    }
}