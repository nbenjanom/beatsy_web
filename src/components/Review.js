import React from 'react';
import "./css/styles.css";

import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/fa/user'
import {remove} from 'react-icons-kit/fa/remove'

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log('#Reviews render this.props', this.props.review);
        console.log('this.props.review.review', this.props.review.review);
        return(
            
            <div className="reviews" >
                <div className="row blockquote review-item">

                    <div className="col-md-3 pt-5">
                        {/* <img class="rounded-circle reviewer" src="http://standaloneinstaller.com/upload/avatar.png"/> */}
                        <Icon size={40} icon={user} style={{color: '#cdcdcd'}}/>  
                        <div className="caption">
                            <small>by <a href="#joe">{this.props.review.author}</a></small>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="ratebox " data-id="0" data-rating="5"></div>
                            <p className="review-text text-center" style={{position:'relative', bottom:50}}>{JSON.parse(this.props.review.comment)}</p>
                            <div className="d-inline-flex ">
                            <small className="review-date" style={{fontSize: 12}}>{this.props.review.posted}</small>
                            <button className="btn" type="button" style={{position: "absolute", right:0, bottom:3, backgroundColor:"#c0392b",boxShadow:"0px 2px 2px #1b1b1b80"}} onClick={() => this.props.onClick(this.props.review.review)}>
                                <Icon size={22} icon={remove} style={{color: '#cdcdcd'}}/>  
                            </button>
                            </div>
                    </div>                          
                </div>  
            </div>

        )
    }

}

export default Review;
// OLD VERS
{/* <div>Commentaire : {this.props.review.comment} </div>
<div>Posté par : {this.props.review.author} </div>
<div>le : {this.props.review.posted} </div>
<button onClick={() => this.props.onClick(this.props.review.review)}>supprimer</button> */}