import React from 'react';

// components
import Footer from '../Home/Components/footer';
import NewUser from '../NewUser/Component/newUser';

import { Redirect } from "react-router-dom";
class UserNew extends React.Component{

    // This form now is controlled.

    state={
        form: {
            firstName:"",
            lastName: "",
            email:"",
                
        },
    };

    handleChange= e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    handleSubmit = (e)=>{
        if (this.state.form.firstName == ""  ){
            alert("Missing fields to complete")
        }else if (this.state.form.lastName == "" ){
            alert("Missing fields to complete")
        }
        else if (this.state.form.email == "" ){
            alert("Missing fields to complete");
        } else if (this.state.form.password == ""){
            alert("Missing fields to complete")
        }   else{
            e.preventDefault();
        
            alert("Form was submitted!")
            console.log("Form was submitted!"); 
            <Redirect to="/home" />;
        }
    };

    render(){
        return(
        <div>
            <NewUser onChange={this.handleChange} 
            formValues={this.state.form}
            onSubmit={this.handleSubmit}/>
            <br/>
            <Footer/>
        </div>
        )
    }
}


export default UserNew;

