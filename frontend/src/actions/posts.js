export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const POST_DETAILS = 'POST_DETAILS'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const NEW_COMMENT = 'NEW_COMMENT'
export const NEW_POST = 'NEW_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const TOGGLE_VOTE_SCORE = 'TOGGLE_VOTE_SCORE'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS_FOR_CATEGORY = 'GET_POSTS_FOR_CATEGORY'

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

export function editPostAction(post) {
    return {
        type: EDIT_POST,
        post,
    }
}

export function deletePostAction(post) {
    return {
        type: DELETE_POST,
        post,
    }
}

export function newComment(comment) {
    return {
        type: NEW_COMMENT,
        comment,
    }
}

export function toggleVoteScore(post, vote) {
    return {
        type: TOGGLE_VOTE_SCORE,
        post,
        vote
    }
}

export function getCategories(categories) {
    return {
        type: GET_CATEGORIES,
        categories,
    }
}

export function getPostsForCategory(posts){
    return{
        type: GET_POSTS_FOR_CATEGORY,
        posts,
    }
}

