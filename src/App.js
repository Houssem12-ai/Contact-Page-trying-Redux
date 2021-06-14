import React,{Component} from 'react';
import Navbar from './componentt/navbar'
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './componentt/home'
import About from './componentt/about'
import Contact from './componentt/contact'
import Post from './componentt/post'

class  App extends Component  {
  render() {
      return (//metion for the moment that :post_id is a number 
        <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>{/* <Route> tag gives components route parameters}}*/}
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route path ='/:post_id' component={Post}/>{/*we can solve this prob by adding /post/post_id and in the link tag also don t forget */}
          {/*if u don t make the 'exacte'routes it stills render home with the other cause they contains the '/' as well*/}
          {/*in the case above contact will match /contact but it will match also the /post_id as well*/}
          </Switch>
        </div>
        </BrowserRouter>
      )

  }
}

export default App;
