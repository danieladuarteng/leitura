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
            const postId = Object.keys(state).filter(item => 
                state[item].id === action.post.id)
                

                return {
                    ...state,
                    [postId]:{
                        ...state[postId],
                        post: state.post
                    }
                    
                }
            

        // case NEW_COMMENT:
        //     const { comment } = action
        //     return {
        //         ...state,
        //         commentCount: state.commentCount + 1,
        //         comments: state.comment.push(action.comment)
        //     }
        // case TOGGLE_VOTE_SCORE:
        //     const { post } = action
        //     return {
        //         ...state,//retorno os posts antigos
        //         [post.id]: {
        //             ...state[post.id],
        //             voteScore: action.vote === 'downVote' ? post.voteScore - 1 : post.voteScore + 1
        //         }
        //     }
        default:
            return state
    }
}
