import { RECEIVE_POSTS, NEW_POST } from "../actions/posts";

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case NEW_POST:
            const post = action
            return {
                ...state,
                [action.post.id]: action.post,
            }

        default:
            return state
    }
}