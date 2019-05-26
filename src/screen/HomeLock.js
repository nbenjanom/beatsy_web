
import React  from 'react';

////////////////////////////////////////////
///////////////[ P A G E S ]////////////////

import HeaderLock from '../components/header/HeaderLock';
import PadContainer from '../components/pad/PadContainer';
import Api from '../components/utils/Api';
import SaveFile  from './SaveFile';
// import KeyPad from '../components/pad/KeyPad';



////////////////////////////////////////////
///////////////[ U T I L S ]////////////////

import styled, { css } from 'styled-components';


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

 class HomeLock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        keyPads : [],
        isSelected : false,
        isRecording : false
    };
    
  this.subGetTrackTimes = this.subGetTrackTimes.bind(this);


  }




componentDidMount(){
  //////////////////////////////////////////////////////////////////
  /////////[ P A C K A G E : S T Y L E - S O U N D ]///////////////

    console.log("------#HOME - ComponentDidMount >> ----------")
    Api.getStyle("hiphop")
    .then(style => {
        // console.log(style) ;
        this.setState({
            keyPads : style.data
      })
  })

  //////////////////////////////////////////////////////////////////
  ////////////////[ C O M P O S I T I O N ]////////////////////////

//   Api.getComposition("5ce19df4bb68711f2c606987")
//   .then(data => {
//     console.log("HOME#=====Api.getComposition======" ,data) ;
//     this.setState({
//       compoId: data.data
 
//   })

// })


    console.log("--------------/////--------------");
}


subGetTrackTimes(keyPadArr){
  console.log('>> subGetTrackTimes >>')
  if(this.state.isRecording === true){
    this.allTrackTimes.push(keyPadArr);
  }
  console.log("#subGetTrackTimes / allTrackTimes: ", this.allTrackTimes);
}
        
  render() {

    
    console.log("#HOME - Render / this.subGetTrackTimes: ", this.subGetTrackTimes);

    return (


      <Container className="container">

        <HeaderLock keyPads={this.state.keyPads} />
        <PadContainer keyPads={this.state.keyPads} subGetTrackTimesFunc={this.subGetTrackTimes}/>
     
      </Container>




    )
  }
}
export default HomeLock; 