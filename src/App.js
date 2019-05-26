import React from 'react';

////////////////////////////////////////////
///////////////[ P A G E S ]////////////////

import Home from './screen/Home';
import Login from './screen/Login';
import SignUp from './screen/SignUp';
import SaveFile from './screen/SaveFile';
import Theme from './screen/Theme';
import Profile from './screen/Profile';
import HomeLock from './screen/HomeLock';
import Community from "./screen/Community";
import CommunityProfile from "./screen/CommunityProfile";


////////////////////////////////////////////
///////////////[ U T I L S ]////////////////
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled, { css } from 'styled-components';


class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
    this.userSignup = null;
    this.userlogin = null;
  }


  render() {
    // if (localStorage.signup !== undefined){
    //   this.userSignup = JSON.parse(localStorage.signup).user
    //   console.log("#App - Render / This.userId: ", this.userId);
    // }
    // if (localStorage.login !== undefined){
    //   this.userId = JSON.parse(localStorage.login).user
    //   console.log("#App - Render / this.userSignup: ",  this.userId);

    // }
    console.log('LocalStorage ', localStorage)

    // if (localStorage.signup !== undefined){
    // this.userSignup = JSON.parse(localStorage.signup).user;
    // console.log('localStorage=======SIGNUP=>UserID: ', this.userSignup);
    // }

    // if (localStorage.login !== undefined){
    //   this.userId = JSON.parse(localStorage.login).user;
    //   console.log('localStorage=======LOGIN=>UserID: ', this.userId);// Note: même si userId = userSignup il faut les disociés!
    // }

    if (localStorage.log !== undefined){
      this.userId = JSON.parse(localStorage.log).user;
      console.log('localStorage=======LOGIN or SIGNUP =>UserID: ', this.userId);// Note: même si userId = userSignup il faut les disociés!
    }


    if( this.userId === undefined ) {
      return(
          <Router>
            <Route path="/" exact component={HomeLock} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
          </Router>
      )
    } 
      return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/home/:theme?" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/communityprofile/:userId?" exact component={CommunityProfile} />
            <Route path="/community" exact component={Community} />
            <Route path="/theme" exact component={Theme} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/savefile" exact component={SaveFile} />
        </Router>
      );
    


    

  }
}

export default App;   

{/* <Link to="/">Home</Link>
<Link to="/profile">Profile</Link>
<Link to="/homeLock">HomeLock</Link>
<Link to="/community">Community</Link>
<Link to="/theme">Theme</Link>
<Link to="/login">Login</Link> */}