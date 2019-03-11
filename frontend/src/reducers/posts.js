import {
    RECEIVE_POSTS,
    NEW_POST,
    DELETE_POST,
    GET_POSTS_FOR_CATEGORY,
    TOGGLE_VOTE_SCORE,
} from "../actions/posts";

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case NEW_POST:
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
        case TOGGLE_VOTE_SCORE:
            const postVotedId = Object.keys(state).filter(item =>
                state[item].id === action.post.id)
            return {
                ...state,
                [postVotedId]: {
                    ...state[postVotedId],
                    voteScore: action.post.voteScore
                }
            }
        default:
            return state
    }
}