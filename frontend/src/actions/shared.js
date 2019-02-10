import { getAllPosts } from '../LeituraAPI'
import { receivePosts } from './posts'

export function handleInitialData() {
    return (dispatch) => {
        return getAllPosts()
            .then(posts  => {
            dispatch(receivePosts(posts))
        })
    }
}
