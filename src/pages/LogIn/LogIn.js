import React from 'react';

// Components
import Footer from '../Home/Components/footer';
import LoginForm from './Components/LoginForm';
import NotFound from '../NotFound/NotFound';

// styles 




import "./Components/Login-2.css";


const LogIn = () => {

    const adminUser = {
        email: "aaron.p.dev@hotmail.com",
        password: "admin123",
    }

    const loginIn = (email, password) => {
      
        if (email.length>0 &&  password.length>0) {
            if(email === adminUser.email && password === adminUser.password) {
                alert("You are logged in ")
               
            }else if(email.length>=0 || password.length<=0) {
                alert("Missing fields to complete")
            }
            else if(email != adminUser.email) {
                alert("This email is not registered !")
            }else if (password!= adminUser.password){
                alert("Incorrect password !")
            }
    }}
    return (
        <div>
            <LoginForm loginIn={loginIn}/>
            <Footer/>
        </div>
        
    );
}
export default LogIn;



