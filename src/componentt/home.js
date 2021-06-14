import React, { Component } from 'react'
//import axios from 'axios' => we just need to connect this component to redux store
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Home extends Component {

  /*   state = { // i only need to connect to the redux store
    posts: []
  } */
  /* componentDidMount(){//right after the componeent is mounted => which is necessary to take data from restAPI
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        console.log(res);

        this.setState({
          posts : [ {id : 1 ,name : 'houssem'},
          { id : 2 ,name : 'adrani'},
          { id : 3 ,name : 'huwwa'},
          { id : 4 ,name : 'rasluna'}
       ] })
      })
  } */
  
  render(){
    const { posts } = this.props //this name should be the same one as the one in the state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.name}</span>
              </Link>
              <p>{post.name}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateStoreToProps = (state) => {
  return {
    posts : state.posts
  }
}// is only a json objct gonna be returned ?

export default connect(mapStateStoreToProps)(Home)