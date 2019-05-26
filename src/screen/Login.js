import React from 'react';
import User from "../components/utils/user/User";

////////////////////////////////////////////
///////////////[ U T I L S ]////////////////

import styled, { css } from 'styled-components';
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './img/login_3.1.jpg';

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

const Button = styled.button`
  border: none;
  background-color: transparent;
`;
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        email : "",
        password: ""
    }
    this.handleChange.bind(this);
    this.send.bind(this);
}

  send = event => {
    if(this.state.email.length === 0){
        return;
    }
    if(this.state.password.length === 0){
        return;
    }
    User.login(this.state.email, this.state.password).then(function(data){
        console.log('Send #Login DATA', data);
        localStorage.setItem('log', JSON.stringify(data.data));
        window.location = "/profile"
    },function(error){
        console.log(error);
        return;
    })
  }    
  handleChange = event => {
    console.log(event.target.value);
    this.setState({
        [event.target.id]: event.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <Container>

        <div style={{backgroundImage: `url(${logo})`,width:"100%", height:"100%",backgroundSize: 'cover',backgroundPosition: 'center center',backgroundRepeat: 'no-repeat'}}>

        <div style={{position:"absolute", top: 20, right: 20}}>
            <Button>
              <Link to="/" style={{textDecoration:"none"}}>
                  <Icon size={30} icon={close} style={{color: '#efefef' }}/>
              </Link>
            </Button>
          </div>

          <div className="row text-center" style={{backgroundColor: "#131313", width:"90%", height:360, borderRadius: 16, boxShadow:"0px 2px 20px #131313", position:"relative",top:"25%",left:"9%"}}>
              <form  className="justify-content-center"style={{backgroundColor: "#131313", width: "100%",borderRadius: 16}}>
                <div className="col-12">
                  <Title1>lOGIN</Title1>
                </div>
                <div className="col-12 pt-4">
                  <div className="form-group" >
                    <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="username"  style={{height:60}}/>
                  </div>
                </div>
                <div className="col-12 pt-4">
                  <div className="form-group">
                    <input type="password" id="password"  value={this.state.password} onChange={this.handleChange} className="form-control"  placeholder="Password"  style={{height:60}}/>
                  </div>
                </div>
                <div className="col-12 pt-4">
    
                  <button type="button" className="btn " onClick={this.send} style={{height:40 ,width: "100%", backgroundColor:"#ababab"}}>Submit</button>
         
                </div>
              </form>
              <div className="col-12  pt-2">
                <div className="d-inline-flex" >
                  <p style={{color:"#b4b4b4"}}>Pas encore de compte?</p>
                  <div style={{paddingLeft:20}}>
                    <Link to='/signup' style={{textDecoration:"none"}}>
                      <p style={{color:"#efefef"}}>Sign up</p>
                    </Link>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </Container>
    )
  }
}
export default Login;

{/* <div className="col-12 pt-3">
<div className="form-group">
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  <small id="emailHelp" className="form-text text-muted"> exemple:" Text@Votre-mail.com " </small>
</div>
</div> */}