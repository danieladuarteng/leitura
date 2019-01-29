import { FETCH_POSTS, FETCH_POST_DETAILS } from '../actions'
import { combineReducers} from 'redux';

const initialState = {
    posts: [{}],
}

function posts(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: [...action.payload]
            }
        default:
            return state
    }
}

export default posts
