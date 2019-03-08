import {
    POST_DETAILS,
    GET_POST_COMMENTS,
    EDIT_POST,
    NEW_COMMENT,
    TOGGLE_VOTE_SCORE,
    EDIT_COMMENT,
    DELETE_COMMENT,
    COMMENT_DETAILS,
} from "../actions/posts";

export default function post(state = {}, action) {
    switch (action.type) {
        case POST_DETAILS:
            return {
                ...state,
                ...action.post
            }
        case COMMENT_DETAILS:
            return {
                ...state,
                ...action.comment
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

        case TOGGLE_VOTE_SCORE:
            return {
                ...state,
                voteScore: action.post.voteScore,
            }

        case NEW_COMMENT:
            return {
                ...state,
                commentCount: state.commentCount + 1,
                comments: state.comments.concat(action.comment)
            }
        case EDIT_COMMENT:
            const commentsList = state.comments.map(item => (
                item.id === action.comment.id ? action.comment : item
            ));
            return {
                ...state,
                comments: commentsList,
            }
        case DELETE_COMMENT:
            const { comments } = state;
            let newComments = comments;

            newComments.splice(
                comments.findIndex(item => item.id === action.comment.id), 1
            );

            return {
                ...state,
                commentCount: state.commentCount - 1,
                comments: newComments,
            }
        default:
            return state
    }
}
