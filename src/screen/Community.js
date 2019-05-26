import React  from 'react';

////////////////////////////////////////////
///////////////[ P A G E S ]////////////////

import Header from '../components/header/Header';
import Api from '../components/utils/Api';
import Player from "../components/Player";
import Accordion   from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



////////////////////////////////////////////
///////////////[ U T I L S ]////////////////

import styled, { css } from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert';
import { user } from 'react-icons-kit/fa/user';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

////////////////////////////////////////////
///////////////[ S T Y L E S ]//////////////

const Container = styled.section`
    background-color: #1B1B1B;
    height: autovh;
`;

const Button = styled.button`
    border-color: transparent;
    background-color: #2c2c2c;
`;

 class Community extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allTracks : []
    }
    this.renderAllTracks = this.renderAllTracks.bind(this);
    this.handleBack  = this.handleBack.bind(this);

  }

  componentDidMount(){
    console.log('---------------- #Community / ComponentDidMount ---------------');
    Api.getAllCompositions()
    .then(allTracks => {
      console.log(JSON.parse(allTracks[0].user_composition.track))
      this.setState({
        allTracks
      })
    });

  }

  handleBack() {
    this.props.history.push('/');
  }


  renderAllTracks(){
    console.log(">> renderAllTracks >>");
    console.log("This.state.alltracks: ", this.state.allTracks);

    if(this.state.allTracks.length > 0){
      console.log(">> renderAllTracks 1 /  this.state.alltracks[0]: ", this.state.allTracks[0].user_composition.listen);

      console.log("THISSSTATEALLTRACKS/", this.state.allTracks[0].user_composition._id);

      return (
        <Accordion bsPrefix={{backgroundColor:"none"}}>    
          {this.state.allTracks.map(({user_composition}, index) =>{
            let userUrl= "/communityprofile/" + user_composition.user._id;
            console.log("#COMMUNITY - MAPPING / userUrl: ", userUrl);
            return (

              <Card key={user_composition._id} bsPrefix={{backgroundColor:"none"}}>
                <Card.Header>
                
                  <div className="d-inline-flex">
            
                    <Player key={index} listens={user_composition.listen} trackId={user_composition._id} name={JSON.parse(user_composition.name)} track={JSON.parse(user_composition.track)} style={{backgroundColor:"#1B1B1B60"}} />             
            
                    <p className="pl-5" style={{fontSize:18, color:"#fafafa"}}>{JSON.parse(user_composition.name)}</p> 
                    <Link to={userUrl}>
                      <p className="pl-5" style={{fontSize:18, color:"#fafafa"}}>{user_composition.user.username}</p>
                    </Link>

                  </div>
                
                <div style={{float:"right"}}>
                  <Icon size={30} icon={ic_more_vert} style={{color: '#cdcdcd'}}/>  
                </div>

                </Card.Header>

            </Card>
        
          )

        })}
      </Accordion>    
    )
      } else {return (null)} 

    // return  this.state.allTracks.map(({user_composition}, index) =>{
    //   console.log("MAPPING user_composition : ", user_composition);
    //   console.log("MAPPING user_composition trackId : ", user_composition._id);
    //   return(
    //       <Player key={index} listens={user_composition.listen} trackId={user_composition._id} name={JSON.parse(user_composition.name)} track={JSON.parse(user_composition.track)} style={{backgroundColor:"#1B1B1B60"}} />             
    //   )
    // })}
    // else {return (null)} 

  };
   
  render() {
    console.log("COMMUNITY - RENDER / this.State.alltracks.length: ", this.state.allTracks.length);
    console.log("COMMUNITY - RENDER /  this.state.alltracks: ")
    return (


      <Container className="container">

          <div className="d-inline-flex">
            <div onClick={this.handleBack} style={{height:50, width:50}}>
              <Icon size={30} icon={ic_keyboard_arrow_left} style={{color: '#fff',position: "relative", top:30 , left: 10,zIndex:10}}/>
            </div> 
            <div>
              <h4 style={{color:"#fafafa",position:"absolute", right:20, top:30, fontWeight:"bold"}}>Sound Community</h4>
            </div> 
          </div>


        <div className="row pt-5">
          <div className="col-12">
            {this.renderAllTracks()}
          </div>
        </div>
      </Container>

    )
  }
}
export default Community;