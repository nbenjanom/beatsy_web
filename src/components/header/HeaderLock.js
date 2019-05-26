import React  from 'react';
import Timer from "react-compound-timer";

////////////////////////////////////////////
///////////////[ U T I L S ]////////////////

import styled, { css } from 'styled-components';
import { Icon } from 'react-icons-kit';
import {note} from 'react-icons-kit/iconic/note'
import {record} from 'react-icons-kit/iconic/record';
import {ic_headset} from 'react-icons-kit/md/ic_headset';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert';

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

 class HeaderLock extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };

    }


  render() {

    return (
        <div className="row pt-3"> 

            <div className="col-4">  
            <Button style={{width: 100, height: 30, borderRadius: 16}}>
                <Link to="/login" style={{textDecoration:"none", display:"flex",flexDirection:'row'}}>
                    <Icon size={16} icon={note} style={{ alignContent:"center",color: '#3d3d3d' }}/>
                    <p style={{ paddingLeft: 8,fontSize: 16, fontWeight: 600,fontFamily: "Poppins",color:"#3d3d3d"}}>Theme</p>    
                </Link>
            </Button>
            </div> 

            <div className="col-4 pt-1" style={{display:"flex", flexDirection:'row'}}>    
                <p style={{fontSize: 16, fontWeight: 400,fontFamily: "Poppins",color:"#3d3d3d"}}>00:00:00</p> 
                <div style={{backgroundColor: "transparent", border:"none", position:"relative", top:-2.5, left: 15}}>            
                     <Icon size={20} icon={record} style={{ color: '#eb000020' }}/>
                </div>    
            </div>  

            <div className="col-2">  
                <Link to="/login" style={{textDecoration:"none"}}>
                    <Icon size={25} icon={ic_headset} style={{ color: '#efefef' }}/>
                </Link>
            </div> 

            <div className="col-2">  
                <Link to="/login" style={{textDecoration:"none"}}>
                    <Icon size={25} icon={ic_more_vert} style={{color: '#3d3d3d' }}/>
                </Link>
            </div> 
 
        </div>

    )
  }
}
export default HeaderLock;