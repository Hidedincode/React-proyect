
import React from 'react';

// Style 

import "./styles/newUser.css";


class NewUser extends React.Component{
   

    
       


        lookPass = (e) =>{
            let x = document.getElementById("input-password");
            if (x.type == "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }
          };
        
        render(){
            
           
            return(
                    
                <div className="container-newUser">
                    <h1>Create new user</h1>
                        
                    <hr className="hr-newUser"/>
                    <form className="form-newUser"
                            onSubmit={this.props.onSubmit}>
                        <div className="div-input-1">
                            <label htmlFor="" className="">First name</label>
                            <input 
                            className=""
                            onChange={this.props.onChange} 
                            type="text" 
                            name="firstName"
                            placeholder="Write first name..."
                            maxLength="10"
                            minLength="5"
                            value={this.props.formValues.firstName} 
                            autocomplete="off"/>
                        
                            <label htmlFor="" className="">Last name</label>
                            <input 
                            className=""
                            onChange={this.props.onChange} 
                            type="text"
                            placeholder="Write last name..." 
                            name="lastName"
                            maxLength="10"
                            minLength="5"
                            value={this.props.formValues.lastName}
                            autocomplete="off"/>
                 
                            <label htmlFor="" className="">Email</label>
                            <input 
                            className=""
                            onChange={this.props.onChange} 
                            type="email"
                            placeholder="Write your email..."
                            maxLength="30"
                            minLength="10" 
                            name="email"
                            value={this.props.formValues.email}
                            autocomplete="off"/>
                            
                            <label htmlFor="" className="">Password</label>
                            <input 
                            id="input-password"
                            onChange={this.props.onChange} 
                            type="password" 
                            name="password"
                            maxLength="15"
                            placeholder="Write a password..."
                            autocomplete="off"
                            value={this.props.formValues.password}
                            />
                            <div className="div-lookPass">
                            <input type="checkbox" onClick={this.lookPass}/>
                            <h6>Show password</h6>
                            </div>
                        </div>
                        <br/>
                        <button className="button-newUser"
                                onClick={this.props.onSubmit}
                                type="submit"
                        >Check in</button>    
                    </form>        
                </div>
            );
        }
    }

    


export default NewUser;
