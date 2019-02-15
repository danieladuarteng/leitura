import { getAllPosts, getPostDetails, getPostComments } from '../LeituraAPI'
import { receivePosts, receivePostDetails, receivePostComments } from './posts'

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
            .then(comments =>{
                dispatch(receivePostComments(comments))
            })
    }
}


