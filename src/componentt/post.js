import React, { Component } from 'react'
import {connect} from 'react-redux'
import { deletePostt } from '..//actions/deleteAct';

class Post extends Component {
    //why not writing const here ?

    handleCLick = () => {
            //console.log("post with the id " + this.props.post.id + " should be deleted")
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
        //here u see the difference between console(fun())[invoked] and console(fun)[not invokeda]
    }
    /* state= {
        post : null
    } */

    /* componentDidMount(){
        console.log(this.props)//props are the route parameters due to that tag
        let id = this.props.match.params.post_id//check the console to figure out that umique value of the toute parameters 
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id) //this + id will only import data with the id == 1 from that link
        .then( res => {
            this.setState({
                post : res.data
            })
            //console.log(res.data)
        })
    } */
    tutsta = () => {
        console.log("hubla");
    }

    render() {//this.handleCLick()
        //here after the render we write the function 
        const post = this.props.post ? (
            <div className="post" >
                <h4 className="center" >{this.props.post.name}</h4>
                <p>{this.props.post.body}</p>
                <div className="center"  >
                    <button onClick={this.handleCLick}>
                        Delete Post
                    </button>
                </div>
            </div>

        ) : (
            <div className="container">loading post</div>
        )   // u can use the same name of the state as a variable  in render 

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToStore = (state, ownprops) => {
    let id = ownprops.match.params.post_id
    return {
        post : state.posts.find(post => post.id === id)
    }
}

//i need now to map the action to the store
const MapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePostt(id))
        }
    }
}

export default connect(mapStateToStore,MapDispatchToProps )(Post)