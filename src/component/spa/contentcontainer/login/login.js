import React from 'react';


class Login extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            username:'',
            psw:'',
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    getusername=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({username: event.target.value})

    }

    getpsw=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({psw: event.target.value})
    }

    handleSubmit(event) {
       
        event.preventDefault();
        alert("You are submitting " + this.state.username);
        
      }

    render() { 
        return ( 
            <div>
                <h1>This is Login Page!!!!</h1>
                <form  onSubmit={this.handleSubmit}>
                    <label>username: </label>
                    <input type='text' id="username" onChange={this.getusername}></input>
                    <br></br>
                    {/* username: { this.state.username } */}
                    <br></br>

                    <label>Password:</label>
                    <input type="password" id="psw" onChange={this.getpsw}></input>
                    {/* Password: { this.state.psw } */}
                    <br></br>

                    <button type="submit">Login</button>
                    
                    
                </form>
            </div>
         );
    }
}
 
export default Login;