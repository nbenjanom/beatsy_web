import React from "react";
import Api from "./utils/Api";

class Listens extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            listens : 0
        }
    }

    componentDidMount(){
        console.log("---- #Listens - CdidMount -----")
        // Api.getListens(this.props.trackId)
        // .then(data => {console.log("#Listens CdidMount --> Data : ", data)});
    }

    render(){
        console.log("LISTENS listens.length: ", this.props.listens);
        return(
            <div style={{color:"#fff"}}>
                <p>{this.props.listens}</p>
            </div>
        )
    }
}

Listens.defaultProps = {
    listens: "00"
  }

export default Listens;