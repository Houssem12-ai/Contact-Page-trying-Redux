import React from 'react'
import { Link, NavLink ,withRouter} from 'react-router-dom'    //the difference is that navlink gives u an option to the tag that is action 


const Navbar = (props) => {

   /*  setTimeout( () => {
        props.history.push('/about')},2000)
    
 */
    return(//LINK to just load the exact compo that we need 
        //and when we inspect it stills a tag 
        // NavLink is used to add a class to the link for styling purpose
        <nav className="nav-wrapper red darken-3">
            <div className="container" >
                <a className="brand-logo"> About Us</a>
                <ul className="right">
                 <li><Link to="/"> Home</Link> </li>
                 <li><Link to="/About">ABout</Link> </li>
                 <li><Link to="/Contact">Contact</Link> </li>

                </ul>
            </div>
        </nav>

    )
}

export default withRouter(Navbar)//higher order component that give the navbar compo route objects
// because it is not nested within the <brouserroute> and <route> tags
        
        
        




