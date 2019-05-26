import React from "react";
import Config from "../Config";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class PlayerCom extends React.Component {
    constructor(props){
        super(props);

        this.playCompo = this.playCompo.bind(this);
    }


    playCompo(){
        console.log(">>playDelay >>");
        let arr = this.props.track;

        console.log("arr : ", arr);
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
      };


    render(){

  
        return(
            <div style={{border:"solid"}}>
               <p>{this.props.name}</p> 
                <button onClick={this.playCompo}>
                    PLAY
                </button>
                <div>
                  Listens: 
                </div>
            </div>
        );
      
    }
}

export default PlayerCom;