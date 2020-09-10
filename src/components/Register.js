
import React,{Component} from 'react';

export class RegisterComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }

    }

    handleInputChange=(e)=>{
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name]= e.target.value;
        this.setState(currentState);
    }
    render(){
        return <divr>
            <label for="UserName" >UserName </label>
            <input type ="text"  id="UserName"  name="username" onChange={this.handleInputChange}/>

            

            <label for="Password" >Password </label>
            <input type ="text"  id="Password"  name="password"  onChange={this.handleInputChange}/>
            <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>



    
        </divr>
        
        
        
    }
}