import { getAllPosts, getPostDetails, getPostComments, createPost } from '../LeituraAPI'
import { receivePosts, receivePostDetails, receivePostComments, newPost } from './posts'


const genereteId = Math.random().toString(36).substr(-8)

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
        id: genereteId,
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
