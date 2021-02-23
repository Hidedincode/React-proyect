
import React from 'react';

import tragos from './styles/tragos.jpg';

import {Link} from "react-router-dom"
import './styles/header.css'

function Header() {
    
        return(
            <div className="div-header">

                <h3>Combo vodka</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus doloribus quis </p>
                <img src={tragos} alt="tragos" className="imag-header"/>
                
                <div>
                <Link to="/home/products" className="button-header">See more</Link>
                </div>
            </div>
    
        )
        
}
export default Header;