
import React from 'react';



// styles

import './Components/styles/Home.css'


// Components 



import Footer from './Components/footer';
import Header from './Components/header';
import Welcome from './Components/msjWcm';


class Home extends React.Component{ 


  render(){
    return (
      <div>
        <Welcome/>
        <Header/>
        <Footer/>
      </div>
    );
  }
}
  
export default Home;

