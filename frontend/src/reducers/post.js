import { POST_DETAILS, GET_POST_COMMENTS, EDIT_POST } from "../actions/posts";

export default function post(state = [], action) {
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
        return{
            ...state,
            ...action.post,
        }
        default:
            return state
    }
}
