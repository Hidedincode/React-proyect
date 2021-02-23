import React from 'react';


import { Link } from 'react-router-dom';

import './styles/footer.css';



class Footer extends React.Component{




    render(){
        const facebook = "https://www.facebook.com/aaron.pineronuz/";
        const instagram = "https://www.instagram.com/aaronpiniero/";
        const twitter = "https://twitter.com/aaronpiniero";

        return (
            
               <footer className="footer">
                   <hr className="hr"/>
                   <div className="container">
                        <div className="row">
                            <div className="footer-col">
                                    <h1>El Templo</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis fugiat laudantium incidunt quidem et a libero quaerat illo assumenda.</p>
                            </div>
                                <div className="footer-col">
                                    <h4>Menu</h4>
                                    <ul>
                                        <li><Link to="/Home">Home</Link></li>
                                        <li><Link to="/Home/LogIn">Log in</Link></li>
                                        <li><Link to="/Home/Products">Products</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>Menu</h4>
                                    <ul>
                                        <li><Link to="/Home/Contact">Contact</Link></li>
                                        <li><Link to="/Home/AboutUs">About us</Link></li>
                                        <li><Link to="/Home/Aditional">Aditional</Link></li>
                                    </ul>  
                                </div>
                                <div className="footer-col">
                                    <h4>Redes Sociales</h4>
                                    <ul className="redes">
                                        <li><a target="blank" href={facebook} className="facebook"><i className="fab fa-facebook"></i></a></li>
                                        <li><a target="blank" href={instagram} className="twitter"><i className="fab fa-twitter"></i></a></li>
                                        <li><a target="blank" href={twitter} className="instagram"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                        </div>
                   </div>
               </footer> 
        );
    }
}
export default Footer;


