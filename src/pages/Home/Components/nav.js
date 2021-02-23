import React from 'react';


// style
import './styles/nav.css';
import { Link } from 'react-router-dom';



class Nav extends React.Component{

    render(){
        return(
            <div className="container-nav">
              <nav className="nav">
              <h1 className="h1-nav">El Templo </h1>
              <ul>
                <li><Link className="link" to="/home">Home</Link></li>
                <li><Link  className="link" to="/home/logIn">Log in</Link></li>
                <li><Link  className="link"to="/home/products">Products</Link></li>
                <li><Link  className="link" to="/home/aboutUs">About us</Link></li>
              </ul>

              <div className="input">
                 <input className="input-input"/>
                 <Link to="#"className="input-button fas fa-search"/>
              </div>
              </nav>
              <hr className="hr"/>
            </div>  
          );
    }
} 
export default Nav;

