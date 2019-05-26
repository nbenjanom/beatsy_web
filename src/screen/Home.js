import React  from 'react';

////////////////////////////////////////////
///////////////[ P A G E S ]////////////////

import Header from '../components/header/Header';
import PadContainer from '../components/pad/PadContainer';
import Api from '../components/utils/Api';
import User from '../components/utils/user/User';
import SaveFile  from './SaveFile';
import HomeLock  from './HomeLock';

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
const GradientImg = styled.div`
background-image: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0.2),rgba(27, 27, 27, 1));
backgroundSize: 'cover'; 
backgroundPosition: 'center center';
backgroundRepeat: 'no-repeat';
// overflow: 'hidden';
width: 100%;
z-index:1;
`;

const Button = styled.button`
    border-color: transparent;
    background-color: #2c2c2c;
`;

 class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        keyPads : [],
        compoId: [],
        trackTimes : [],
        trackTimesStr: '',
        isRecording : false,
        isLogin: true,
        modalView: false,
        style : this.props.match.params.theme || 'electro'
    };
    this.userId = null;
    this.disconnect.bind(this);
    this.allTrackTimes = [];
    
    
    // this.getTrackTimes = this.getTrackTimes.bind(this);
    this.subGetTrackTimes = this.subGetTrackTimes.bind(this);
    this.onRec = this.onRec.bind(this);
    this.timeTesting = this.timeTesting.bind(this);
    // this.getUsersCompositions = this.getUsersCompositions.bind(this);
  }

  // getTrackTimes(){
  //   console.log('>> getTrackTimes >>')
  //   this.setState({trackTimes : this.allTrackTimes });
  // }
  disconnect = event => {
    User.logout();
    window.location = "/";
  }

  timeTesting(){
    console.log(">> timeTesting >>");
    if(this.allTrackTimes.length >= 2){
      console.log("TIMETEST: ", this.allTrackTimes[1].time);
      console.log("TIMETEST HOUR: ", parseInt(this.allTrackTimes[1].time.slice(0,2)));
      console.log("TIMETEST MINUTES: ", parseInt(this.allTrackTimes[1].time.slice(3,5)));
      console.log("TIMETEST SECONDS: ", parseInt(this.allTrackTimes[1].time.slice(6,8)));
      console.log("TIMETEST MILISECONDS: ", parseInt(this.allTrackTimes[1].time.slice(9)));


    }
    console.log("<< timeTesting <<");
  }

  onRec(){
    console.log(">> onRec >>");
    ////////////////////////////////////////////////////////
    ////////////////////[ G E T - T I M E R]///////////////

    let getDate = new Date();
    let miliSecond = getDate.getMilliseconds();;
    let clearDate = getDate.toLocaleTimeString();
    let exactTime = clearDate +':'+ miliSecond;
    let hour = parseInt(exactTime.slice(0,2));
    let miliSecHour = hour * 3600000;

    let minute = parseInt(exactTime.slice(3,5));
    let miliSecMinute = minute * 60000;

    let seconds = parseInt(exactTime.slice(6,8));
    let miliSecSeconds = seconds * 1000;

    let millisec = parseInt(exactTime.slice(9));
    let milliTotal = miliSecHour + miliSecMinute + miliSecSeconds + millisec;
    if(this.state.isRecording === false){

      this.allTrackTimes = [];
      
      this.allTrackTimes.push({trackStartMs : milliTotal});
      this.setState({
          isRecording : true,
          modalView: false
      })

    } else {  
        this.allTrackTimes.push({trackEndMs : milliTotal});
        let trackLenght = this.allTrackTimes[this.allTrackTimes.length - 1].trackEndMs - this.allTrackTimes[0].trackStartMs;
        // console.log("HEY ", this.allTrackTimes.length);

        for( let i=1 ; i < this.allTrackTimes.length - 1; i++ ){
          // console.log("BOUCLE REC OFF");
          this.allTrackTimes[i].timeMark = this.allTrackTimes[i].milisecTotal - this.allTrackTimes[0].trackStartMs;
          // console.log("Marqueur Temps en milisec: ", this.allTrackTimes[i].timeMark);
        };

        this.allTrackTimes.push({trackLenght});
        const trackTimesStr = JSON.stringify(this.allTrackTimes);
        console.log("STRINGIFY : ", trackTimesStr);
        this.setState({
            isRecording : false,
            modalView: true,
            trackTimes : this.allTrackTimes
        })     

    }
    // console.log("REC this.State.isRecording: ", this.state.isRecording);
}

// getSaveFiles() {

// }

  subGetTrackTimes(keyPadArr){
    console.log('>> subGetTrackTimes >>')
    if(this.state.isRecording === true){
      this.allTrackTimes.push(keyPadArr);
    }
    console.log("#subGetTrackTimes / allTrackTimes: ", this.allTrackTimes);
  }

  // styleTheme(theme){
  //   this.setState({
  //     style : theme
  //   });
  // };


componentDidMount(){
  console.log("------#HOME - ComponentDidMount >> ----------")
  this.userId = JSON.parse(localStorage.log).user;
  console.log('HOME#=======componentDidMount()==this.userId ', this.userId);
  //////////////////////////////////////////////////////////////////
  /////////[ P A C K A G E : S T Y L E - S O U N D ]///////////////

  this.changeTheme(this.state.style);

  //////////////////////////////////////////////////////////////////
  ////////////////[ C O M P O S I T I O N ]////////////////////////
  ///////////[ U S E R _ C O M P O S I T I O N ]//////////////////

  Api.getCompositions(this.userId)
  .then(data => {
    console.log("HOME#=====Api.getComposition======" ,data) ;
    this.setState({
      compoId: data.data
 
  })

})

  console.log("--------------/////--------------");
}

// getUsersCompositions() {
//   this.userId = JSON.parse(localStorage.login).user;
//   console.log('HOME#=======componentDidMount()==this.userId ', this.userId);

//     Api.getCompositions(this.userId)
//     .then(data => {
//       console.log("HOME#=====Api.getComposition======" ,data) ;
//       this.setState({
//         userCompo: data.data
  
//     })

//   })
// }

// componentDidUpdate() {
//   console.log("------#HOME - componentDidUpdate >> ----------")
//   this.userId = JSON.parse(localStorage.login).user;
//   console.log('HOME#=======componentDidMount()==this.userId ', this.userId);

//     Api.getCompositions(this.userId)
//     .then(data => {
//       console.log("HOME#=====Api.getComposition======" ,data) ;
//       this.setState({
//         userCompo: data.data
  
//     })

//   })
// }

changeTheme(theme) {
  console.log('Home#changeTheme theme', theme);
  Api.getStyle(theme)
    .then(style => {
        console.log(">> changeTheme >>", style) ;
        this.setState({
            keyPads : style.data
      })
  })
}
        
  render() {

    const { keyPads, musicCategory,_id }= this.state;

    console.log('HOME# this.props.style', this.state.style)
    console.log('HOME# this.state', this.state)
    console.log('HOME# this.changeTheme', this.changeTheme)
    console.log('HOME# this.props.match.params.theme', this.props.match.params.theme)


    console.log("HOME#===== render()====== this.state.compoId" , this.state.compoId);
    // console.log("HOME#===== render()====== this.state.compoId" , this.state.userCompo);

    // this.userId = JSON.parse(localStorage.login).user;
    // console.log('localStorage=======LOGIN=>UserID: ', this.userId);// Note: même si userId = userSignup il faut les disociés!

    console.log('HOME//this.state.keyPads ', keyPads);
    console.log("#HOME - Render / this.State.trackTimes: ", this.state.trackTimes);
    console.log("#HOME - Render / this.State.isRecording: ", this.state.isRecording);
   
    // if(this.userId === undefined) {
    //   return( 

    //     <HomeLock />   

    //   )
    // }
      if( this.state.modalView !== false ) {
        return( 

          <SaveFile compoInfo={this.state.compoId} userCompo={this.state.userCompo} track={this.state.trackTimes}/>   

        )
      }
    return (

      // <GradientImg>
      <Container className="container">
    

        <Header keyPads={this.state.keyPads}  onToggle={this.disconnect} onRecFunc={this.onRec}/>
        {/* <button  style={{width:40, height:20}} > Logout</button> */}
        <PadContainer keyPads={this.state.keyPads} subGetTrackTimesFunc={this.subGetTrackTimes}/>

      </Container>
      
      // </GradientImg>s




    )
  }
}
export default Home;