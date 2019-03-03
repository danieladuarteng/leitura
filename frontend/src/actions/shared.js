import {
    getAllPosts,
    getPostDetails,
    getPostComments,
    createPost,
    editPost,
    deletePost,
    //createComment,
    //voteScorePost,
} from '../LeituraAPI'

import {
    receivePosts,
    receivePostDetails,
    receivePostComments,
    newPost,
    editPostAction,
    deletePostAction,
    newComment,
    toggleVoteScore
} from './posts'


export function handleInitialData() {
    return (dispatch) => {
        return getAllPosts()
            .then((posts) => {
                dispatch(receivePosts(posts))
            })
    }
}

export function postDetails(id) {
    return (dispatch) => {
        return getPostDetails(id)
            .then(post => {
                dispatch(receivePostDetails(post))
                return post;
            })
    }
}

export function postComments(id) {
    return (dispatch) => {
        return getPostComments(id)
            .then(comments => {
                dispatch(receivePostComments(comments))
            })
    }
}

export function addPost(post) {

    const postContent = {
        timestamp: post.timestamp,
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category,
        voteScore: 1,
        deleted: false,
        commentCount: 0
    }

    return dispatch => {
        return createPost(postContent)
            .then(resp => dispatch(newPost(resp)))
            .catch(e => {
                console.warn('Error in createPost: ', e)
            })
    }
}

// export function AddComment(parentId, content) {
//     const commentContent = {
//         timestamp: content.timestamp,
//         body: content.body,
//         author: content.author,
//     }

//     return dispatch => {
//         return createComment(parentId, commentContent)
//             .then(resp => dispatch(newComment(resp)))
//             .catch(e => {
//                 console.warn('Error in createComment: ', e)
//             })
//     }
// }

export function handleEditPost(id, edited) {
    return dispatch => {
        return editPost(id, edited)
            .then(resp => dispatch(editPostAction(resp)))
            .catch(e => {
                console.warn('Error in editPost: ', e)
            })
    }
}


export function handleDeletePost(id) {
    return dispatch => {
        return deletePost(id)
            .then(resp => {
                dispatch(deletePostAction(resp))
            })
            .catch(e => {
                console.warn('Error in deletePost: ', e)
            })
    }
}

export function voteScorePostAction(info){
    return (dispatch) =>{
        // //return voteScorePost(info)
        // .then(resp =>{
        //     dispatch(toggleVoteScore(resp))
        // })
        // .catch((e) =>{
        //     console.warn('Error in voteScorePost: ',e)
        //     //dispatch(toggleVoteScore(info))
        //     alert('The was an error liking or desliinking the post. Try again')
        // })
    }
}