import React  from 'react';
import Timer from "react-compound-timer";
// import ReactStopwatch from 'react-stopwatch';
// import TimerMachine from 'react-timer-machine'
 
// import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";

////////////////////////////////////////////
///////////////[ U T I L S ]////////////////
import Dropdown from 'react-bootstrap/Dropdown'

import styled, { css } from 'styled-components';
import { Icon } from 'react-icons-kit';
import {note} from 'react-icons-kit/iconic/note'
import {record} from 'react-icons-kit/iconic/record';
import {ic_headset} from 'react-icons-kit/md/ic_headset';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert';
import {userTimes} from 'react-icons-kit/fa/userTimes'

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

////////////////////////////////////////////
///////////////[ S T Y L E S ]//////////////

const Container = styled.section`
    background-color: #1b1b1b;
    height: 100vh;
`;

const Button = styled.button`
    border-color: transparent;
    background-color: #2c2c2c;
`;

 class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };

        // this.onRec = this.onRec.bind(this);
        // this.renderTime = this.renderTime.bind(this);
        // this.getTimer = this.getTimer.bind(this);

    }


  render() {

    return (
        <div className="row pt-3"> 

            <div className="col-4">  
            <Button style={{width: 100, height: 30, borderRadius: 16}}>
                <Link to="/theme" style={{textDecoration:"none", display:"flex",flexDirection:'row'}}>
                    <Icon size={16} icon={note} style={{ alignContent:"center",color: '#efefef' }}/>
                    <p style={{ paddingLeft: 8,fontSize: 16, fontWeight: 600,fontFamily: "Poppins",color:"#efefef"}}>Theme</p>    
                </Link>
            </Button>
            </div> 

            <div className="col-4 pt-1" style={{display:"flex", flexDirection:'row'}}>    
                <p style={{fontSize: 16, fontWeight: 400,fontFamily: "Poppins",color:"#efefef"}}>00:00:00</p> 
                <Button onClick={this.props.onRecFunc} style={{backgroundColor: "transparent", border:"none", position:"relative", top:-10}}>            
                     <Icon size={20} icon={record} style={{ color: '#eb0000' }}/>
                </Button>    
            </div>  

            <div className="col-1" style={{position:"relative", right: 10}}>  
                <Link to="/Profile" style={{textDecoration:"none"}}>
                    <Icon size={25} icon={ic_headset} style={{ color: '#efefef' }}/>
                </Link>
            </div> 

            <div className="col-1 ">

                <Icon size={25} icon={userTimes} onClick={this.props.onToggle} style={{color: '#efefef'}}/>

            </div>

            <div className="col-1 ">  
            <Link to="/Community" style={{textDecoration:"none"}}>

                    {/* <Dropdown bsPrefix={{paddingRight: 10}}>
                    <div data-toggle="collapse" bsPrefix={{paddingRight: 10}}> */}
                        <Icon size={25} icon={ic_more_vert} style={{color: '#efefef'}}/>
                        </Link>
                    
                    {/* </div>
                        <Dropdown.Menu class="collapse" >
                            <Dropdown.Item href="/community">Community</Dropdown.Item>
                            <Dropdown.Item onClick={this.props.onToggle}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

            </div> 
 
        </div>

    )
  }
}
export default Header;