import React from 'react';
import Config from '../Config';

////////////////////////////////////////////
///////////////[ U T I L S ]////////////////

import styled, { css } from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert';
import {close} from 'react-icons-kit/fa/close';
import logo from './img/bg_1.jpg';
import NewSound from './img/logo_sound.jpeg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


////////////////////////////////////////////
///////////////[ S T Y L E S ]//////////////
const Container = styled.div`
  background-color: #1B1B1B;
  height: 100vh;
  display: flex;
`;
const BackImage = styled.div`
background-image: "url(${logo})";
width:100%;
height:100%;
z-index: 10;
`;

const GradientImg = styled.div`
background-image: linear-gradient(rgba(0,255,0,0.4),rgba(0, 0, 0, 1));
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

class SaveFile  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.userId = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.HandleClickCompo = this.HandleClickCompo.bind(this);

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    console.log('SaveFile#//compoInfo//==handleChange(event)//Value', this.state.value);
  }

  handleSubmit(event) {
    console.log('SaveFile#//compoInfo//==handleSubmit(event)//Value ', this.state.value);
    event.preventDefault();
  }


  handleClick() {
    const { 
      compoInfo,
      track,
      _id,
      user,
      name,
      musicCategory
     }= this.props;
     this.userId = JSON.parse(localStorage.log).user;
     console.log('handleClick()========this.userId ',this.userId )

     
    const composition = {
      userId:  this.userId,
      trackCompo: JSON.stringify(track),
      category:  track[1].musicCategoryId,
      name:  JSON.stringify(this.state.value)
    };
    console.log('SaveFile#========composition=======//CompoInfo', compoInfo)
    console.log('SaveFile#========composition=======//CompoInfo[0]', compoInfo[0])

    console.log('SaveFile#========composition=======//track', track)
    console.log('========composition=======ComponentDIdMount///composition', composition);

    const compositionUrl = `${Config.host}/api/user/${composition.userId}/composition?track=${composition.trackCompo}&musicCategory=${composition.category}&name=${composition.name}&listen=0`;
    console.log('compositionUrl=======ComponentDIdMount', compositionUrl);
    // const userCompoUrl = `${Config.host}/api/composition?user_composition=${UserComposition.id}`;

  fetch(compositionUrl, {
      method: "POST",
    })
    console.log('SaveFile#//handleClick()//==Mycomposition', this.state.compositionUrl);
   

  }



  // HandleClickCompo() {
  //   const { 
  //     userCompo,
  //    }= this.props;
  //    this.userId = JSON.parse(localStorage.login).user;
  //    console.log('handleClick()========this.userId ',this.userId )

     
  //   const UserComposition = {
  //     id: userCompo._id
  //   };
  //   console.log('SaveFile#========composition=======//CompoInfo', UserComposition)
  //   console.log('SaveFile#========composition=======//UserComposition._id', UserComposition._id)



  //   // http://localhost:3001/api/composition?user_composition=5ce5619d29eb9218ccb7fc66 // format url a post
  //   const compositionUrl = `${Config.host}/api/composition?user_composition=${UserComposition.id}`;
  //   console.log('compositionUrl=======ComponentDIdMount', compositionUrl);

  // fetch(compositionUrl, {
  //     method: "POST",
  //   })
  //   console.log('SaveFile#//handleClick()//==Mycomposition', this.state.compositionUrl);
  // }



  
  render() {
    const { 
      compoInfo,
      track,
      _id,
      user,
      name,
      musicCategory
     }= this.props;

    console.log('SaveFile#//compoInfo//==', compoInfo)
    console.log('SaveFile#//compoInfo//==compoInfo._id', compoInfo._id)
    console.log('SaveFile#==//track//==', track)
    console.log('SaveFile#==//track[1]//== ', track[1])
    console.log('SaveFile#==//track[1]//== ', track[1].musicCategoryId)


    return (
  
      <div className="justify-content-center align-items-center" style={{
        backgroundImage: 'linear-gradient(rgba(39,174,96),rgba(0, 0, 0, 1))',
        height: '100vh',
        display: "flex",}}>


            <div style={{position:"absolute", top: 20, right: 20}}>
              <Button>
                <Link to="/" style={{textDecoration:"none"}}>
                    <Icon size={30} icon={close} style={{color: '#efefef' }}/>
                </Link>
              </Button>
            </div>
   

        <div className="row text-center" style={{backgroundColor: "#1b1b1b", width:"90%", height:360, borderRadius: 16, boxShadow:"0px 2px 20px #1b1b1b"}}>
          <div style={{backgroundImage: `url(${logo})`,width:"100%", height:"100%",backgroundSize:'cover',backgroundPosition: 'center center',borderRadius: 16 }}>
            <div className="col-12 pb-4" style={{paddingTop: "15%"}}>
                <h2 style={{fontWeight:"bold", fontSize: 35, color: "#fafafa", letterSpacing:4}}>Ma Composition</h2>
            </div>

          <form onSubmit={this.handleSubmit} style={{width:"100%",paddingTop: 20}}>
              <div className="col-12">

                  <input  
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    className="form-control" 
                    placeholder="Titre de composition.." 
                    style={{width:'100%', height:100, backgroundColor: "#24242490", border: "none", color:"#fff",fontSize: 20}}/>

              </div>
              <div className="col-12 pt-1 ">
              <Link to="/home" style={{textDecoration:"none"}}>
                <button 
                type="submit"
                value="Submit" 
                className="btn mb-2"
                onClick={this.handleClick}
                style={{
                  backgroundColor: "#1DB954",
                  width:"100%",
                  height:50,
                  justifyContent:"center",
                  alignItems:"center"}}>
                 
                    <p style={{color:"#efefef", fontSize: 18,paddingTop: 5}}>Sauvegarde</p>
        
           
                </button>
                </Link>
              </div>
          </form>

          </div>
        </div>
      </div>
    )
  }
}
export default SaveFile;