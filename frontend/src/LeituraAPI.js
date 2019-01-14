const api = "http://localhost:3001";

const headers ={
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want'
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => {
        console.log('todos os posts')
        console.log(data)
    return data
    })
    .catch(error =>{
        console.log(error)
        return error
    })



export default api;