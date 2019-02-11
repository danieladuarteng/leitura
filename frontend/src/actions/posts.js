export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const POST_DETAILS = 'POST_DETAILS'

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts
    }
}

export function receivePostDetails(post) {
    return{
        type: POST_DETAILS,
        post: post
    }
}