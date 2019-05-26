import React from 'react';
// import Swiperz from '../components/swiper/Swiperz';
import "../components/swiper/styles.css";
////////////////////////////////////////////
///////////////[ U T I L S ]////////////////
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import styled, { css } from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';
import {shoppingCart} from 'react-icons-kit/fa/shoppingCart';
import {lock} from 'react-icons-kit/fa/lock'

import logo_electro from './img/bg_12.jpg';
import logo_hiphop from './img/bg_14.jpg';
import logo_funk from './img/bg_11_lock.jpg';
import logo_edm from './img/bg_15_lock.jpg';
// import logo from './img/thumb_theme.gif';
// import logo from './img/logo_theme2.jpg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

////////////////////////////////////////////
///////////////[ S T Y L E S ]//////////////
const Container = styled.div`
  background-color: #1B1B1B;
  height: 135vh;
  // width: 100vw;
  display: flex;
`;

const Back_btn = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5%;
  padding-left: 2%;
`;

const GradientImg = styled.div`
background-image: linear-gradient( rgba(190,46,221,0.5),rgba(0, 0, 0,0.6),rgba(0, 0, 0, 1));
// backgroundSize: 'cover'; 
// backgroundPosition: 'center center';
// backgroundRepeat: 'no-repeat';
// overflow: 'hidden';
width: 100%;
z-index:1;
`;
const Theming = styled.button`
align-items: center;
height:125px;
width:95%;
background-color: rgba(142,68,173,0.8);
border-radius: 12px;
border: none;
`;

const ThemingLock = styled.button`
align-items: center;
height:125px;
width:95%;
background-color: rgba(142,68,173,0.4);
border-radius: 12px;
border: none;
`;

const Names = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  padding-top: 40px;
  padding-left: 10px;
`;
const NamesLock = styled.div`
  color: #dddddd;
  font-weight: bold;
  font-size: 30px;
  padding-top: 40px;
  padding-left: 10px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;


const logoTheme = 'https://res.cloudinary.com/dfc5jnbxg/image/upload/v1558254872/Beatsy/logo_theme.png';

const params = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  // direction: 'vertical',
  // slidesPerView: 3,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
}

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }

    this.handleBack  = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.push('/');
  }



  render() {

    return (
      // <Swiperz/>
      <Container>
        <GradientImg>  

          <div onClick={this.handleBack} style={{height:50, width:50}}>
            <Icon size={30} icon={ic_keyboard_arrow_left} style={{color: '#efefef',position: "relative", top:15 , left: 10}}/>
          </div> 

          <Swiper {...params} className="swiper-container">
 

              <div className="swiper-slide" style={{backgroundColor:'transparent'}}>

                <Link to='/home/electro'> 
                  <img src={logo_electro} alt='' style={{borderRadius:16}}/>
                </Link>

                <h1 style={{position:"absolute",  bottom: 150, left: '25%',color: "#fff", zIndex:2, fontSize:28, fontWeight:"bold"}}>Electro City</h1>
                <div style={{position:"absolute",  top: 180, left:"5%", width:"90%"}}>
                  <p style={{color: "#fff", zIndex:10, fontSize:16}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate, voluptatum repellendus neque quae ab eveniet reprehenderit eos voluptatem, consequuntur fugiat ea perferendis qui</p>
                  <p style={{color: "#2ecc71", fontWeight:"bold"}}>Votre package est disponible!</p>
                </div>
              </div>

              <div className="swiper-slide"  style={{backgroundColor:'transparent',borderRadius:16}}>
                <Link to='/home/hiphop'>   
                  <img src={logo_hiphop} alt='' style={{borderRadius:16}}/>   
                </Link>      
                <h1 style={{position:"absolute",  bottom: 150, left: '25%',color: "#fff", zIndex:2, fontSize:28, fontWeight:"bold"}}>Hiphop City</h1>
                <div style={{position:"absolute",  top: 180, left: "5%", width:"90%"}}>
                  <p style={{color: "#fff", zIndex:10, fontSize:16}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate, voluptatum repellendus neque quae ab eveniet reprehenderit eos voluptatem, consequuntur fugiat ea perferendis qui</p>
                  <p style={{color: "#2ecc71", fontWeight:"bold"}}>Votre package est disponible!</p>
                </div>     
              </div>

              <div className="swiper-slide" style={{backgroundColor:'transparent',borderRadius:16}}>
                <img src={logo_funk} alt='' style={{borderRadius:16}}/>
                <h1 style={{position:"absolute",  bottom: 150, left: '25%',color: "#fff", zIndex:2, fontSize:28, fontWeight:"bold"}}>Funk City</h1>
                  <Icon size={50} icon={lock} style={{color: '#cdcdcd94',position:"absolute",  top: 35, left: "50%"}}/>  
                  <div style={{position:"absolute",  top: 180, left: "5%", width:"90%"}}>
                    <div className="d-inline-flex">
                    <Icon size={25} icon={shoppingCart} style={{color: '#cdcdcd'}}/>
                    <p style={{color: "#d35400", zIndex:10, fontSize:16,paddingLeft: 10}}>Déverrouiller ce pack pour <span style={{color:"#f39c12", fontSize: 17}}>2,49 €</span></p>
                    </div>
                    {/* <p style={{color: "#2ecc7170", fontWeight:"bold"}}>Package Lock</p> */}
                </div>   
              </div>               

              <div className="swiper-slide" style={{backgroundColor:'transparent'}}>
                <img src={logo_edm} alt='' style={{borderRadius:16}}/>
                <h1 style={{position:"absolute",  bottom: 150, left: '25%',color: "#fff", zIndex:2, fontSize:28, fontWeight:"bold"}}>EDM City</h1>
                  <Icon size={50} icon={lock} style={{color: '#cdcdcd94',position:"absolute",  top: 35, left: "50%"}}/>  
                  <div style={{position:"absolute",  top: 180, left: "5%", width:"90%"}}>
                    <div className="d-inline-flex">
                    <Icon size={25} icon={shoppingCart} style={{color: '#cdcdcd'}}/>
                    <p style={{color: "#d35400", zIndex:10, fontSize:16,paddingLeft: 10}}>Déverrouiller ce pack pour <span style={{color:"#f39c12", fontSize: 17}}>3,99 €</span></p>
                  </div>
                    {/* <p style={{color: "#2ecc71"}}>autem voluptas ratione? Autem, maiores dolores?</p> */}
                </div>
              </div>

              

          </Swiper>

          {/* <div className="row pt-4">
        
            <Button type="btn" className='col-12' style={{height: 120}}>
              <Link to='/home/electro'>      
                <div style={{backgroundImage: `url(${logo_electro})`,width:"100%", height:"100%",backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',borderRadius: 16 }}>
                  <Names>Electro City</Names>
                </div>
              </Link>
            </Button>
           
           
            <Button OnClick={() => this.props.history.push('/home/hiphop')} className='col-12 pt-2' style={{height: 120}}>
              <Link to='/home/hiphop'>    
              <div style={{backgroundImage: `url(${logo_hiphop})`,width:"100%", height:"100%",backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',borderRadius: 16 }}>
                  <Names>Hip-Hop City</Names>
                </div>
              </Link>
            </Button>

            <Button className='col-12 pt-2' style={{height: 120}}>
              <div style={{backgroundImage: `url(${logo_funk})`,width:"100%", height:"100%",backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',borderRadius: 16 }}>
                <NamesLock>Funk City</NamesLock>
              </div>
            </Button>
            <Button className="col-12 pt-2" style={{height: 120}}>
              <div style={{backgroundImage: `url(${logo_edm})`,width:"100%", height:"100%",backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',borderRadius: 16 }}>
                <NamesLock>EDM City</NamesLock>    
              </div>
            </Button>
          </div> */}
         

        </GradientImg>  
    </Container>
   
    )
  }
}
export default Theme;
