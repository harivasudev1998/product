import React from 'react';


class Register extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            firstname:'',
            lastname:'',
            username:'',
            psw:'',
            confirmpsw:''


        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getfirstname=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({firstname: event.target.value})

    }

    
    getlastname=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({lastname: event.target.value})

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

    getconfirmpsw=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({confirmpsw: event.target.value})
    }

    handleSubmit(event){

        event.preventDefault();
        alert("You are submitting " + this.state.firstname+" "+this.state.lastname);
    }

    render() { 
        return ( 
            <div>
                <h1>This is Register Page!!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>firstname: </label>
                    <input type='text' id="firstname" onChange={this.getfirstname}></input>
                    <br></br>
                    {/* firstname: { this.state.firstname } */}
                    <br></br>

                    <label>lastname: </label>
                    <input type='text' id="lastname" onChange={this.getlastname}></input>
                    <br></br>
                    {/* lastname: { this.state.lastname } */}
                    <br></br>

                    <label>username: </label>
                    <input type='text' id="username" onChange={this.getusername}></input>
                    <br></br>
                    {/* username: { this.state.username } */}
                    <br></br>

                    <label>Password:</label>
                    <input type="password" id="psw" onChange={this.getpsw}></input>
                    <br></br>
                    {/* Password: { this.state.psw } */}
                    <br></br>

                    <label>Confirm Password:</label>
                    <input type="confirmpassword" id="confirmpsw" onChange={this.getconfirmpsw}></input>
                    <br></br>
                    {/* Confirm Password: { this.state.confirmpsw } */}
                    <br></br>


                    <button type="submit">Sign Up</button>
                    
                    
                </form>
            </div>
         );
    }
}
 
export default Register;