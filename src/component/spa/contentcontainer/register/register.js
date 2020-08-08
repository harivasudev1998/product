import React from 'react';
import 'C:/React-redux/react-app/reactspa/src/App.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Register extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            confirmpassword:'',
            invalidfirstname: false,
            invalidlastname: false,
            invalidusername: true,
            invalidpassword: false,
            invalidconfirmpassword: false,
            invalidsubmit: true,
            existuser: []


        }
       
    }

    signUp = (event) => {
        let signupRequestBody = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "username": this.state.username,
            "password": this.state.password,
            "confirmpassword": this.state.confirmpassword
        }
        console.log(this.state)
        axios.get('http://localhost:3000/users')
            .then(response => {
                var existuser = response.data.find(user => user.username === this.state.username)
                this.setState({ existuser: existuser })
            }, error => { console.error(error) })
        if (this.state.existuser.length == 0) {
            axios.post('http://localhost:3000/users', signupRequestBody)
                .then(response => {
                    console.log('signUp done')
                    this.props.history.push('/login')
                }, error => {
                    console.error(error)
                })
        }
    }

    getfirstname=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidfirstname: true })
        } else {
            this.setState({ invalidfirstname: false, firstname: event.target.value })
        }
    }

    
    getlastname=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidlastname: true })
        } else {
            this.setState({ invalidlastname: false, lastname: event.target.value })
        }

    }

    getusername=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidusername: true })
        } else {
            this.setState({ invalidusername: false, username: event.target.value })
        }

    }


    getpassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidpassword: true })
        } else {
            this.setState({ invalidpassword: false, password: event.target.value })
        }
    }

    getconfirmpassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value !== this.state.password) {
            this.setState({ invalidconfirmpassword: true })
        } else {
            this.setState({ invalidconfirmpassword: false, confirmpassword: event.target.value })
        }
    }

    // vaildsubmit = () => {
    //     console.log("valid submit")
    //     console.log(this.state)
    //     if (this.state.invalidfirstname || this.state.invalidlastname || this.state.invalidusername || this.state.invalidpassword || this.state.invalidconfirmpassword ) {
    //         console.log('validation:fail')
    //         this.setState({ invalidsubmit: true })
    //     } else {
    //         console.log('validation :success')
    //         this.setState({ invalidsubmit: false })
    //     }
    //     return this.state.invalidsubmit
    // }

    render() { 
        const buttonclr={
            backgroundColor:"darkgreen",
            color:"white",
            padding:'15px',
            // margin:'10px',
            border:'none',
            opacity: 0.9,
           
            
        } 
        return ( 
            <div className="contain" style={{backgroundColor:"lightgoldenrodyellow",paddingTop:'10px',paddingBottom:'210px'}}>
                <h1 style={{color:"blue"}}>Sign Up</h1>
                {/* {this.state.existuser.length!=0 &&<h3 className='error'>User already exist !!! "Signup with different username"</h3>} */}
                <form style={{textAlign:"center"}}>
                    
                    <b><label>First Name: </label></b>
                    <input type='text' id="firstname" name="firstname" onChange={this.getfirstname}></input>
                    {this.state.invalidfirstname && <span className='error'>FirstName is required</span>}
                    <br></br>
                    {/* firstname: { this.state.firstname } */}
                    <br></br>

                    <b><label>Last Name: </label></b>
                    <input type='text' id="lastname" name="lastname" onChange={this.getlastname}></input>
                    {this.state.invalidlastname && <span className='error'>LastName is required</span>}
                    <br></br>
                    {/* lastname: { this.state.lastname } */}
                    <br></br>

                    <b><label>Username: </label></b>
                    <input type='text' id="username"  onChange={this.getusername}></input>
                    {this.state.invalidusername && <span className='error'>Username must not be empty</span>}
                    <br></br>
                    {/* username: { this.state.username } */}
                    <br></br>

                    <b><label>Password:</label></b>
                    <input type="password" id="password"  onChange={this.getpassword}></input>
                    {this.state.invalidpassword && <span className='error'>Password is required</span>}
                    <br></br>
                    {/* Password: { this.state.password } */}
                    <br></br>

                    <b><label>Confirm Password:</label></b>
                    <input type="confirmpassword" id="confirmpassword"  onChange={this.getconfirmpassword}></input>
                    {this.state.invalidconfirmpassword && <span className='error'>Confirm Password should match with Password</span>}
                    <br></br>
                    {/* Confirm Password: { this.state.confirmpassword } */}
                    <br></br>


                    <input type="button" onClick={this.signUp} value="SignUp"></input>
                    <br></br>
                    <br></br>
                    
                    
                </form>
            </div>
         );
    }
}
 
export default Register;