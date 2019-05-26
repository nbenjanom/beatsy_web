import React from "react";
import Config from "../Config";
import Listens from "./Listens";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Icon } from 'react-icons-kit';
import {play} from 'react-icons-kit/fa/play'

////////////////////////////////////////////
///////////////[ S T Y L E S ]/////////////

import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: #1b1b1b10;
  box-shadow: 0px 4px 5px  #1b1b1b50;
`;

class Player extends React.Component {
    constructor(props){
        super(props);

        this.playCompo = this.playCompo.bind(this);
    }


    playCompo(){
        console.log(">>playDelay >>");
        let arr = this.props.track;

        console.log("++ playDelay ++ Received Track : ", arr);
        // console.log("playDelay: ", arr[1].timeMark);
        for (let i = 1 ; i < arr.length - 2 ; i++){
            // console.log("playcompo 1: ");
          setTimeout( function(){
            // console.log("playcompo 2: ", arr[i]);
            // console.log("playcompo 2: ", arr[i].path);
              let audioTest = new Audio(Config.host + arr[i].path);
            //   console.log("playcompo 3: ");
              audioTest.play()
            //   console.log("playcompo 4: ");
          }, arr[i].timeMark )
        //   console.log("playcompo 5: ");
        }
        // console.log("playcompo 6: ");

        fetch(`${Config.host}/api/user/${this.userId}/composition/${this.props.trackId}?listen=1`,
          {method: "PUT"})
          .then(res => res.json())
          .then(data => console.log(" ++ playDelay ++ FetchPut listen : ", data));
      };


    render(){

    // console.log('Player======Location', Route.path)

    return(
      <Button className="btn" onClick={this.playCompo}>
        <Icon size={25} icon={play} style={{color: '#fafafa'}}/>  
        <Listens listens={this.props.listens}/>
      </Button>
    );     
  }
}

export default Player;