export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const POST_DETAILS = 'POST_DETAILS'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const NEW_POST = 'NEW_POST'

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts: posts
    }
}

export function receivePostDetails(post) {
    return {
        type: POST_DETAILS,
        post: post
    }
}

export function receivePostComments(comments) {
    return {
        type: GET_POST_COMMENTS,
        comments,
    }
}

export function newPost(post) {
    return {
        type: NEW_POST,
        post,
    }
}
