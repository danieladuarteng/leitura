export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST_DETAILS= 'FETCH_POST_DETAILS';

export function seePosts ({allPosts}){
    return{
        type: FETCH_POSTS,
        allPosts,
    }
}

export function seePostDetails({id}){
    return{
        type: FETCH_POST_DETAILS,
        id,
    }
}

