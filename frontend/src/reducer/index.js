//Library Code
function createStore(reducer) {
    // The store should have four parts
    // 1. The stat
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. Update the state

    let state // 1. The state
    let listeners = []  //  3. Listen to changes on the state

    const getState = () => state // 2. Get the state

    const subscribe = (listener) => { // fala para listeners as alterações do estado
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    // 4. Update the state , dispacth responsável por atualizar o state dentro da store
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())

    }
    return {
        getState,
        subscribe,
        dispatch,
    }
}

// App Code

const NEW_POST = 'NEW_POST'
const REMOVE_POST = 'REMOVE_POST'
const SEE_POST_DETAILS = 'SEE_POST_DETAILS'
const NEW_COMMENT = 'NEW_COMMENT'
const REMOVE_COMMENT = 'REMOVE_COMMENT'
const SEE_COMMENT_DETAILS = 'SEE_COMMENT_DETAILS'

function newPostAction(post) {
    return {
        type: NEW_POST,
        post,
    }

}

function removePostAction(id) {
    return {
        type: REMOVE_POST,
        id,
    }
}

function seePostDetailsAction(id) {
    return {
        type: SEE_POST_DETAILS,
        id,
    }
}


function newCommentAction(comment) {
    return {
        type: NEW_COMMENT,
        comment,
    }

}

function removeCommentAction(id) {
    return {
        type: REMOVE_COMMENT,
        id,
    }
}

function seeCommentDetailsAction(id) {
    return {
        type: SEE_COMMENT_DETAILS,
        id,
    }
}

//reducer pois ela pega o estado e uma ação  e os reduz a um novo estado
function posts(state = [], action) {
    switch (action.type) {
        case NEW_POST:
            return state.concat([action.post])
        case REMOVE_POST:
            return (
                state.map((post) => post.id === action.id &&
                    Object.assign({}, post, {
                        delete: !post.delete
                    })).filter((post) => post.id !== action.id)
            )
        case SEE_POST_DETAILS:
            return state.map((post) => post.id === action.id)
        default:
            return state
    }
}

function comments(state = [], action) {
    switch (action.type) {
        case NEW_COMMENT:
            return state.concat([action.comment])
        case REMOVE_COMMENT:
            return (
                state.filter((comment) => comment.id !== action.id)
            )
        case SEE_COMMENT_DETAILS:
            return state.map((comment) => comment.id === action.id)
        default:
            return state
    }
}

function app(state = {}, action) {
    return {
        posts: posts(state.posts, action),
        comments: comments(state.comments, action),
    }
}

const store = createStore(app)
store.subscribe(() => {
    console.log("the new state is: ", store.getState())
})

//atualiza o state da store
store.dispatch(newPostAction({
    id: 0,
    title: 'The post about react',
    delete: false
}))

store.dispatch(removePostAction(0))