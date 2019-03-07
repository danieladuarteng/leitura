const api = "http://localhost:3001";

const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json',
}

export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => {
            //console.log('todos os posts')
            //console.log(data)
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        })

export const getAllCategories = () =>
    fetch(`${api}/categories`, {
        method: 'get',
        headers
    })
        .then(res => res.json())
        .then(data => {
            //console.log('todas categorias')
            //console.log(data)
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        })


export const getPostsForCategories = (name) =>
    fetch(`${api}/${name}/posts`, {
        method: 'get',
        headers
    })
        .then(res => res.json())
        .then(data => {
            //console.log('posts com categorias',name)
            //console.log(data)
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        })

export const getPostDetails = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'get',
        headers
    })
        .then(res => res.json())
        .then(data => {
            //console.log("post com detalhes", postId)
            //console.log(data)
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        })

export const getPostComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, {
        method: 'get',
        headers
    })
        .then(res => res.json())
        .then(data => {
            //console.log("post com commentários", postId)
            //console.log(data)
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        })

export const createPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            id: Math.random().toString(36).substr(-8),
            timestamp: post.timestamp,
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category,
            voteScore: post.voteScore,
            deleted: post.deleted,
            commentCount: post.commentCount,
        })
    }).then(res => res.json())
        .then(data => {
            //console.log("novo post", post)
            //console.log(data)
            return data
        })


export const voteScorePost = (id, vote) => 
    fetch(`${api}/posts/${id}`,{
        method: 'POST',
        headers,
        body: JSON.stringify({
            option: vote,
        })
    }).then(res => res.json())
        .then(data => {
            console.log("novo voto", vote)
            console.log(data)
            return data
        })




export const createComment = (parentId, content) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            id: Math.random().toString(36).substr(-8),
            timestamp: content.timestamp,
            title: content.title,
            body: content.body,
            author: content.author,
            parentId,
        })
    }).then(res => res.json())
        .then(data => {
            console.log("novo comentário", content)
            console.log(data)
            return data
        })

export const editPost = (id, edited) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
            title: edited.title,
            body: edited.body,
        })
    }).then(res => res.json())
        .then(data => {
            console.log("post edited", edited)
            console.log(data)
            return data
        })

export const deletePost = id =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json())
        .then(data => {
            console.log("post deleted", id)
            console.log(data)
            return data
        })

export default api
