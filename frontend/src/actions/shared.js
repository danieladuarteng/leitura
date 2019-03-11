import {
    getAllPosts,
    getPostDetails,
    getPostComments,
    createPost,
    editPost,
    deletePost,
    getAllCategories,
    getPostsForCategories,
    createComment,
    voteScorePost,
    editComment,
    deleteComment,
    getCommentsDetails,
    voteScoreComment,
} from '../LeituraAPI'

import {
    receivePosts,
    receivePostDetails,
    receivePostComments,
    newPost,
    editPostAction,
    deletePostAction,
    getCategories,
    getPostsForCategory,
    newComment,
    toggleVoteScore,
    editCommentAction,
    deleteCommentAction,
    receiveCommentDetails,
    toggleVoteScoreComment,
} from './posts'


export function handleInitialData() {
    return (dispatch) => {
        return getAllPosts()
            .then((posts) => {
                dispatch(receivePosts(posts))
            })
    }
}

export function handleGetAllCategories() {
    return dispatch => {
        return getAllCategories()
            .then((result) => {
                dispatch(getCategories(result.categories));
            })
    }
}

export function handlePostsForCategory(category) {
    return dispatch => {
        return getPostsForCategories(category)
            .then((result) => {
                dispatch(getPostsForCategory(result))
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

export function commentDetails(id) {
    return (dispatch) => {
        return getCommentsDetails(id)
            .then(resp => {
                dispatch(receiveCommentDetails(resp))
                return resp
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

export function AddComment(parentId, content) {
    const commentContent = {
        timestamp: content.timestamp,
        body: content.body,
        author: content.author,
    }

    return dispatch => {
        return createComment(parentId, commentContent)
            .then(resp => dispatch(newComment(resp)))
            .catch(e => {
                console.warn('Error in createComment: ', e)
            })
    }
}

export function handleEditPost(id, edited) {
    return dispatch => {
        return editPost(id, edited)
            .then(resp => dispatch(editPostAction(resp)))
            .catch(e => {
                console.warn('Error in editPost: ', e)
            })
    }
}

export function handleEditComment(id, edited) {
    console.log(edited)
    return dispatch => {
        return editComment(id, edited)
            .then(resp => dispatch(editCommentAction(resp)))
            .catch(e => {
                console.warn('Error in editComment: ', e)
            })
    }
}

export function handleDeletePost(id, ) {
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

export function handleDeleteComment(id) {
    return dispatch => {
        return deleteComment(id)
            .then(resp => {
                dispatch(deleteCommentAction(resp))
            })
            .catch(e => {
                console.warn('Error in deleteComment: ', e)
            })
    }
}

export function voteScorePostAction(id, vote) {
    return (dispatch) => {
        return voteScorePost(id, vote)
            .then(resp => {
                dispatch(toggleVoteScore(resp))
                console.log(resp)
            })
            .catch((e) => {
                console.warn('Error in voteScorePost: ', e)
                alert('The was an error liking or deslinking the post. Try again')
            })
    }
}

export function voteScoreCommentAction(id, vote) {
    return (dispatch) => {
        return voteScoreComment(id, vote)
            .then(resp => {
                dispatch(toggleVoteScoreComment(resp))
                console.log(resp)
            })
            .catch((e) => {
                console.warn('Error in voteScorePost: ', e)
                alert('The was an error liking or deslinking the post. Try again')
            })
    }
}