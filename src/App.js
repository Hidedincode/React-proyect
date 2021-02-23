import React from 'react';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import UserNew from './pages/NewUser/UserNew';
import Layout from '../src/pages/Home/Components/Layuot';
import NotFound from './pages/NotFound/NotFound';
import Products from './pages/Products/Products';

import AboutUs from '../src/pages/AboutUs/AboutUs';



function App (){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/home/login" component={LogIn}/>
                    <Route  exact path="/home/newUser" component={UserNew}/>
                    <Route  exact path="/home/products" component={Products}/>   
                    <Route exact path="/home/aboutUs" component={AboutUs}/>        
                    <Route  exact component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}   


export default App;
