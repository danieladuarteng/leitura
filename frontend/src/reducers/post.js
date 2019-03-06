import {
    POST_DETAILS,
    GET_POST_COMMENTS,
    EDIT_POST,
    NEW_COMMENT,
    TOGGLE_VOTE_SCORE,
} from "../actions/posts";

export default function post(state = {}, action) {
    switch (action.type) {
        case POST_DETAILS:
            return {
                ...state,
                ...action.post
            }
        case GET_POST_COMMENTS:
            const orderVote = action.comments.sort((a, b) => {
                return b.voteScore - a.voteScore
            })
            return {
                ...state,
                comments: [
                    ...orderVote,
                ]
            }
        case EDIT_POST:
            return action.post


        // case NEW_COMMENT:
        //     const { comment } = action
        //     return {
        //         ...state,
        //         commentCount: state.commentCount + 1,
        //         comments: state.comment.push(action.comment)
        //     }
        case TOGGLE_VOTE_SCORE:
            return {
                ...state,
                voteScore: action.post.voteScore,
            }
        default:
            return state
    }
}
