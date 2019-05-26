import React from 'react'
import User from '../components/utils/user/User.js';
import logo from './img/login_1.1.jpg';
import { Button, FormGroup, FormControl } from "react-bootstrap";

////////////////////////////////////////////
///////////////[ U T I L S ]////////////////

import styled, { css } from 'styled-components';

import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

////////////////////////////////////////////
///////////////[ S T Y L E S ]//////////////
const Container = styled.div`
  background-color: #1B1B1B;
  height: 100vh;
`;

const GradientImg = styled.div`
background-image: linear-gradient(rgba(0,255,0,0.4),rgba(0, 0, 0,0.02),rgba(0, 0, 0, 1));
// backgroundSize: 'cover'; 
// backgroundPosition: 'center center';
// backgroundRepeat: 'no-repeat';
// overflow: 'hidden';
width: 100%;
z-index:1;
`;
const Names = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;
const NamePlay = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

const Title1  = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 20px;
  padding-top: 5px;
`;
const Title3  = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
const Text  = styled.p`
  color: #cdcdcd;
  font-size: 14px;
`;

const Lecture = styled.button`
align-items: center;
height:50px;
width:70%;
background-color: #1DB954;
border-radius: 50px;
border: none;
`;

// const Button = styled.button`
//   border: none;
//   background-color: transparent;
// `;
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // firstName : "",
        // surname : "",
        username : "",
        email : "",
        password: "",
        cpassword: ""
    }
    this.userId = null;
    this.handleChange.bind(this);
    this.send.bind(this);
}

send = event => {


  if(this.state.username.length === 0){
      return;
  }
  
  if(this.state.email.length === 0){
      return;
  }
  if(this.state.password.length === 0 || this.state.password !== this.state.cpassword){
      return;
  }
  var _send = {
      // firstName: this.state.firstName,
      // surname: this.state.surname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
  }

  User.signup(_send).then(function(data){
      console.log('Send #Signup DATA', data);
      localStorage.setItem('token', data.data.token);
      console.log("localStorage.setItem", localStorage);
      localStorage.setItem('log', JSON.stringify(data.data));  
      // this.userId = JSON.parse(localStorage.log).user;
      // window.location =`/home/this.userId`
      window.location =`/`
  },function(error){
      console.log(error);
      return;
  })
}    

handleChange = event => {
  this.setState({
      [event.target.id]: event.target.value
  });
 
}


  render() {
    console.log('SignUp#==========render()==this.state ',  this.state)
    console.log('SignUp#==========render()== this.state.username ', this.state.username)
    console.log('SignUp#==========render()== this.state.email ', this.state.email)
    console.log('SignUp#==========render()== this.state.passeword ', this.state.password)
    // console.log('localStorage=======SIGNUP=>UserID: ',       JSON.parse(localStorage.signup).user);
 
    return (

      <Container>

        <div style={{backgroundImage: `url(${logo})`,width:"100%", height:"100%",backgroundSize: 'cover',backgroundPosition: 'center center',backgroundRepeat: 'no-repeat'}}>

          <div className="row text-center" style={{ width:"90%", height:360, borderRadius: 16,position:"relative",top:"12%",left:"9%"}}>
              <form  className="justify-content-center"style={{backgroundColor: "#13131310", width: "100%",borderRadius: 16,boxShadow:"0px 2px 20px #131313"}}>
                <div className="col-12 pt-4">
                  <Title1>SIGNUP</Title1>
                </div>
                <div className="col-12 pt-4">
                  <div className="form-group" >
                    <input value={this.state.username} onChange={this.handleChange} id="username"  type="text" className="form-control" placeholder="username"  style={{height:50}}/>
                  </div>
                </div>
                <div className="col-12 pt-4">
                    <div className="form-group" >
                        <input  value={this.state.email} onChange={this.handleChange} id="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" style={{height:50}}/>
                    </div>
                </div>
                <div className="col-12 pt-4">
                  <div className="form-group" >
                    <input  value={this.state.password} onChange={this.handleChange} id="password" type="password" className="form-control" placeholder="Password"  style={{height:50}}/>
                  </div>
                </div>
                <div className="col-12 pt-4">
                  <div className="form-group"  id="cpassword">
                    <input  value={this.state.cpassword} onChange={this.handleChange} id="cpassword"  type="password" className="form-control"  placeholder="Password Validation"  style={{height:50}}/>
                  </div>
                </div>
                <div className="pt-4 d-inline-flex" style={{width:"100%"}}>
                    <div className="col-6">
                      <Link to="/">
                        <button type="button" className="btn " style={{height:40 ,width: "100%", backgroundColor:"#ababab40", color:'#d4d4d4'}}>Retour</button>
                      </Link>
                    </div>
                    <div className="col-6">
               
                     <button onClick={this.send} type="button" className="btn " style={{height:40 ,width: "100%", backgroundColor:"#ababab"}}>Submit</button>
                 
                </div>
                </div>
              </form>
          </div>

        </div>

      </Container>
    )
  }
}
export default withRouter(SignUp);

