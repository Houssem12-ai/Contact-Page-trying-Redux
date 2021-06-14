const initState = {
    posts: [
        {id: '1', name: 'Squirtle Laid an Egg',body:"this contains a lot of things for post 1111"},
        {id: '2', name: 'Charmander Laid an Egg',body:"this contains a lot of things for post 2222"},
        {id: '3', name: 'a Helix Fossil was Found',body:"this contains a lot of things for post 33333"}
    ]
}

const rootReducer = (state = initState, action) => {
    //console.log(action) // action fired 
    
    if (action.type == "DELETE_POST") {
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        })
        return {
            ...state,
            posts : newPosts
        }
    }
    return state
}

export default rootReducer