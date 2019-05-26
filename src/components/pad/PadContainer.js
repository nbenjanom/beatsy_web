import React from "react";
import KeyPad from "./KeyPad";
import Api from "../utils/Api";
import Config from "../../Config";



class PadContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            // keyPads : []
        };
        this.renderKeyPad = this.renderKeyPad.bind(this);

    }
    
    renderKeyPad(){ 
        console.log(">> renderKeyPadMap >>")

            return  this.props.keyPads.map(({name, soundPath, soundCategory, _id, musicCategory}) =>{
            // let url = Config.host + soundPath;
                return(
                    <KeyPad key={_id} id={_id} source={soundPath} name={name} color={soundCategory.color} musicCategory={musicCategory}
                        subGetTrackTimesFunc={this.props.subGetTrackTimesFunc}
                    />                  
                )
            })    
    }    

    render() {
        console.log("--------#PadContainer - Render >> --------------");
        console.log("#PadContainer - Render / this.props.keypads: ", this.props.keyPads);
        // console.log("#PadContainer - Render / this.state.keypads: ", this.state.keyPads);
        console.log("--------------/////--------------");


        return(
            <div className='row'>
                {this.renderKeyPad()}
            </div>
        )
    } 
}
export default PadContainer;