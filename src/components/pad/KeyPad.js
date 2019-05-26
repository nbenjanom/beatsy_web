import React from "react";
import Config from "../../Config";


////////////////////////////////////////////
///////////////[ U T I L S ]////////////////
import './styles.css';
import styled, { css } from 'styled-components';

////////////////////////////////////////////
///////////////[ S T Y L E S ]//////////////

const Container = styled.section`
    background-color: #22222;
    height: 100vh;
`;

const PAD = styled.button`
    border: none;   
`;
//  const idPress = [];

class KeyPad extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            // idPress : []
        };

        this.arr = [];

        this.playPad = this.playPad.bind(this);
        // this.trackTimes = [];

    }
    

    playPad(){
        console.log(">> playPad >>");
        ////////////////////////////////////////////////////////
        ////////////////////[ G E T - T I M E R]///////////////

        let getDate = new Date();
        let miliSecond = getDate.getMilliseconds();
        // console.log('getDate ', getDate.toLocaleTimeString());
        // console.log('MiliSecond ', miliSecond);
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
        

        let audio = new Audio(Config.host + this.props.source);
        audio.load();
        audio.play();
        let pressInfo = {
            type : this.props.name,
            // time : exactTime,
            // hour : parseInt(exactTime.slice(0,2)),
            // miliHour : miliSecHour,
            // minute : parseInt(exactTime.slice(3,5)),
            // miliMinute : miliSecMinute,
            // seconds : parseInt(exactTime.slice(6,8)),
            // milliSecSecond : miliSecSeconds,
            // millisec : parseInt(exactTime.slice(9)),
            milisecTotal : milliTotal,
            path : this.props.source,
            musicCategoryId : this.props.musicCategory._id
        };
        this.props.subGetTrackTimesFunc(pressInfo);

    };



    render() {
        return(
            <div style={{position: 'relative', top: 80,left:8}}>
                {/* <div className="row pr-4" style={{padding: "3px 0px"}}> */}
                    <PAD 
                    key={this.props.id}
                    onClick={this.playPad}
                    className='btn'
                    style={{
                        borderRadius: 10,
                        margin: 3,
                        marginBottom: 10,
                        backgroundColor: this.props.color,
                        width: 108,
                        height: 108,
                        border:"6px solid #24242460",
                        boxShadow:`0px 0px 4px ${this.props.color}`
                        }}>
{/* 
                        {this.props.name} */}

                    </PAD>
                </div>
            // </div>
        )
    }
}

export default KeyPad;