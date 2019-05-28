import React from 'react';
import Player from "../components/Player";
import ReviewContainer from "../components/ReviewContainer";

import Accordion   from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
////////////////////////////////////////////
///////////////[ U T I L S ]////////////////

import styled, { css } from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert';
import logo from './img/user.jpg';
// import NewSound from './img/logo_sound.jpeg';
import Api from "../components/utils/Api";
import User from '../components/utils/user/User';



////////////////////////////////////////////
///////////////[ S T Y L E S ]//////////////
const Container = styled.div`
  background-color: #1B1B1B;
  height: 200vh;
  display: flex;
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
const Names = styled.p`
  color: #fff;
  letter-spacing: 2.5px;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 0px 2px 5px #1b1b1b60;
`;
const NamePlay = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

const Title2  = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
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

const BakGround = styled.div`
background-image: linear-gradient(rgba(0,0,0,0.5),transparent,rgba(0, 0, 0, 0.95));
width: 100%;
height: 320px;
z-index:4;
position: absolute;
top: 0px;
`;


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      tracks : []
    }
    this.userId = null;
    this.disconnect = this.disconnect.bind(this);
    this.handleBack  = this.handleBack.bind(this);
    this.renderPlayer = this.renderPlayer.bind(this);
  }

  disconnect = event => {
      User.logout();
      window.location = "/";
  }

  componentDidMount(){
    this.userId = JSON.parse(localStorage.log).user;
    console.log("#PROFILE - CdidMount / this.userId: ", this.userId);
    console.log('---------------- #Profile / ComponentDidMount ---------------');
    Api.getCompositions(this.userId)
    .then(tracks => {
      console.log("#PROFILE - TRACKS: ", tracks);
      this.setState({tracks : tracks.data});
    });

    console.log("--------------/////--------------");
  }

  renderPlayer(){
    console.log(">> renderPlayer >>");
    const { tracks }= this.state;
    if(this.state.tracks.length > 0){
  
  
      return (
        <Accordion>    
          {this.state.tracks.map(({_id, name, track, listen }, index) =>{
            return (

              <Card key={_id} bsPrefix={{backroundColor:"transparent"}}>
                <Card.Header>

                <div className="d-inline-flex">
                  <Player  name={name} track={JSON.parse(track)} listens={listen} trackId={_id} />
                  <p className="pl-5" style={{fontSize:18, color:"#fafafa"}}>{JSON.parse(name)}</p> 
                </div>


                <Accordion.Toggle as={Button} variant="link" eventKey={name} style={{float:"right"}}>
                  <Icon size={30} icon={ic_more_vert} style={{color: '#cdcdcd'}}/>  
                </Accordion.Toggle>    
                </Card.Header>

              <Accordion.Collapse eventKey={name}>

                <Card.Body>
                   <ReviewContainer  id={_id} />  
                </Card.Body>

              </Accordion.Collapse>

            </Card>
        
          )

        })}
      </Accordion>    
    )
  } else {return (null)}
 
   
    // return  this.state.tracks.map(({_id, name, track }, index) =>{
    //       return(
    //         <div id="accordion" > 
    //           <div  >
    //           <div class="card-header" id="heading">

    //           <div className="d-inline-flex">
    //             <Player name={name} track={JSON.parse(track)} />
    //             <p className="pl-5" style={{fontSize:18, color:"#fafafa"}}>{JSON.parse(name)}</p> 
    //           </div>

    //             <button class="btn btn-link collapsed" style={{float:"right"}} data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample">
    //               <Icon size={30} icon={ic_more_vert} style={{color: '#cdcdcd'}}/>  
    //             </button>
            
    //           </div>
    //           <div class="collapse multi-collapse" id="multiCollapseExample" aria-labelledby="heading" data-parent="#accordion"  style={{backgroundColor:"#242424"}}>
    //             <div class="card-body">
    //             <ReviewContainer  id={_id} />  
    //           </div>
    //           </div>
    //         </div>  
    //       </div>     
        
    //       )
    //   })}
  
    // else {return (null)} 
  };


  handleBack() {
    this.props.history.push('/');
  }

  getUserName() {
    
  }

  render() {
    this.userName = JSON.parse(localStorage.log).username;
    // // console.log("#PROFILE - RENDER / This.State.tracks : ", this.userName.charAt(0).toUpperCase() + this.userName.slice(1));
    // const myNameIs = this.userName.charAt(0).toUpperCase() + this.userName.slice(1);

    return (
      <Container>
        <GradientImg>  
          <div onClick={this.handleBack} style={{height:50, width:50}}>
            <Icon size={30} icon={ic_keyboard_arrow_left} style={{color: '#fff',position: "relative", top:30 , left: 15,zIndex:10}}/>
          </div> 
          {/* <div style={{width: "100%",height:320,position: "relative", top:-50 }}>
            <div style={{backgroundImage: `url(${logo})`,width:"100%", height:"100%",backgroundSize:"cover",backgroundPosition: 'center center',backgroundRepeat: 'no-repeat'}}></div>
            <BakGround />
          </div> */}

           <div className="row pb-4">  
            <div className="col-12 text-center">    
              <img src={logo} alt='' style={{position: "relative", top:20, left:0 ,width:180, height:180, boxShadow:"0px 0px 25px #1b1b1b70", borderRadius: "50%"}}/>
              <Names className="pt-5">{this.userName}</Names>
            </div> 
          </div>  

          <div className="row pb-5">

          <div className="col-12 d-flex justify-content-center">
            <Lecture> <NamePlay>Lecture</NamePlay> </Lecture> 
          </div>

          <div className="col-12 d-flex justify-content-center pt-4">
           <Title2>Dernières nouveautés</Title2> 
          </div>
          </div>
        

     
        {this.renderPlayer()}
   
        </GradientImg>     
      </Container>
    )
  }
}
export default Profile;
