const api = "http://localhost:3001";

const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want'
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
            console.log("post com detalhes", postId)
            console.log(data)
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        })

export default api;