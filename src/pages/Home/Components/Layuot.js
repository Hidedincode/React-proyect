import React, { Children } from 'react';

import Nav from './nav'



function Layout (props){
    const children = props.children;

    return(
        // Con React.Fragment podemos devolver varios elementos y lo entiende como si devolvieramos uno solo. DATASO 
                    
            <div>
            <Nav/>
            {props.children}
            </div>
        
    );
}

export default Layout;
