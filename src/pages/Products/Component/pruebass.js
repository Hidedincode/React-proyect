

import React, { useState, useEffect } from 'react';

import data from "../../Products/articles.json"
import "./styles/article.css";




const ListProduct = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(data)
    }, [])
        
    return articles
}
 
// require(baseUrl+`${date.imag}`)
const Article = () => {

    const art = ListProduct()
    
    return (
        art.map(date => (
            
            <div key={date.id} className="container-article">
                <div className="div-img">
                    <img src={`${date.imag}`} className="img-art"/>
                    <h6 className="h6-art">{date.name} </h6>  
                    <p className="p-art">{date.price}</p>  
                </div>
                <div className="div-button">
                    <button className="button-1">
                        Buy
                    </button>
                </div>
                </div>
         
        )))
}

export default Article;