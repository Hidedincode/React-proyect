import React from 'react';

import Footer from '../Home/Components/footer';
import Article from './Component/pruebass';
import './Products.css'



class Products extends React.Component{


    


    render(){
        return( 
            <div className="products-div">
                <div className="div-art-product">
                    <h1>Products</h1>
                    <br/>
                <Article/>
                </div>
                <Footer/>
            </div>

        )
    }
}  

export default Products;

