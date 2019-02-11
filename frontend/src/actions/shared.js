import { getAllPosts, getPostDetails } from '../LeituraAPI'
import { receivePosts, receivePostDetails } from './posts'

export function handleInitialData() {
    return (dispatch) => {
        return getAllPosts()
            .then((posts)  => {
            dispatch(receivePosts(posts))
        })
    }
}


export function postDetails(id){
    return (dispatch) =>{
        return getPostDetails(id)
            .then(post =>{
                dispatch(receivePostDetails(post))
            })
    }
}


