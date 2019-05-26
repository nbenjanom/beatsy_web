import React from 'react';
// import ReactDOM from 'react-dom';
import Review from './Review';
import Api from "../components/utils/Api";
import Config from "../Config";

////////////////////////////////////////////
///////////////[ S T Y L E S ]/////////////

import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  color: #fafafa;
  background-color: #efefef15;
  box-shadow: 0px 3px 3px  #1b1b1b50;
`;



class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Ton message...",
      comment: "",
      data: [],
      infoReviews: [],
    };

    // -- Bind Zone -- //
    this.userId = JSON.parse(localStorage.log).user;
    this.userName = JSON.parse(localStorage.log).username;

    this.handleChange = this.handleChange.bind(this);
    this.displayReviews = this.displayReviews.bind(this);
    this.send = this.send.bind(this);
    this.deleteReviews = this.deleteReviews.bind(this);

    
    // -- LocalStorage -- //
      // Cette section sert à envoyer le UserId dans le LocalStorage
      // Pas nécessair dans notre cas Beatsy car le UserId sera déjà dans le localStorage
      // au moment du Signup&Login
    // localStorage.setItem("userId", "5ce5490fdc815129ecfa9d75");
    console.log('#ReviewContainer - localStorage: ', localStorage)
    console.log('#ReviewContainer - localStorage("userId") Num;', JSON.parse(localStorage.log).user);
  }

  // -- Fonctionnalité : AFFICHAGE DES COMMENTAIRES dès le chargement de la page -- //
  componentDidMount() {

    console.log('>> componentDidMount #APP')
    
    fetch(`${Config.host}/api/review/user_composition/${this.props.id}`, {
      method: 'GET'
    }).then((res) => {
      return res.json()
    }).then((data)=>{
        //Gestion des erreurs si aucun Reviews
        console.log("#ReviewContainer - DATAz : ", data.data)
      if(data.data.length < 1){
        return
      } else {
      
      // console.log('#componentDidMount Fetch data', data.data)
      // console.log('#componentDidMount Fetch data.data[0].comment', data.data[0].comment)
      // console.log('#componentDidMount Fetch data.data[0].user', data.data[0].user.email)
      // console.log('#componentDidMount Fetch data.data[0].created', data.data[0].created)
      // console.log('#componentDidMount Fetch data.data[0].composition._id', data.data[0]._id)
      

      // création d'un Arr d'objet avec les infos utiles pour afficher les Reviews
      var infoReviews = [];
      for(var i=0; i<data.data.length; i++){
        var infoReview = {
          comment:data.data[i].comment,
          author: data.data[i].username,
          posted: data.data[i].created,
          review: data.data[i]._id
        }
        infoReviews.push(infoReview);
      }
      // Envoie de l'Arr d'objet Reviews aux states
      this.setState({infoReviews: infoReviews})
      console.log("infoReviews", infoReviews)}
    })
    console.log('<< componentDidMount #APP')
  }


  // -- Fonctionnalité : ENVOIE DES REVIEWS A LA BDD-- //
  send = event => {
    var  comment = JSON.stringify(this.state.comment);

    console.log('App #reviewPost', comment)
    console.log('localStorage.setItem("userId");', localStorage)

    console.log('App #reviewPost', comment)
      // Lien fetch des reviews qu'il faut rendre dynamique, il est composé de la manière suivante :
      // Lien Server + Route : http://localhost:3001/api/review
      // + Query user : le UserId on le récupère dans le LocalStorage
      // + Query composition : le compositionId a recuperer dans le map des compositions de chaque utilisateurs
    //   let urlTest = `${Config.host}/api/review?user=${localStorage.userId}&user_composition=5ce655aea2185e1ce857b2e9`;
    //   console.log("URL TEST LOG : ", urlTest);
      console.log("USER ID FOR REVIEW: ", localStorage.userId);
    fetch(`${Config.host}/api/review?username=${this.userName}&user_composition=${this.props.id}`, {
      method: 'POST',
      body:new URLSearchParams({comment: comment})
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('data', data);
    });

    this.displayReviews()
  }

  // -- Fonctionnalité : AFFICHAGE DES COMMENTAIRES à chaque Action (SEND + DELETE) -- //
  displayReviews() {
    console.log('>> displayReviews #APP')
    fetch(`${Config.host}/api/review`, {
      method: 'GET'
    }).then((res) => {
      return res.json()
    }).then((data)=>{
      console.log('#displayReviews Fetch data', data);
      console.log('#displayReviews Fetch data.data', data.data);
      var infoReviews = [];
      for(var i=0; i<data.data.length; i++){
        var infoReview = {
          comment:data.data[i].comment,
          author: this.userName,
          posted: data.data[i].created,
          review: data.data[i]._id
        }
        infoReviews.push(infoReview);
      }
      this.setState({infoReviews: infoReviews})
      console.log("infoReviews", infoReviews)
   
      // console.log("==========+++++++++infoReviews.review", infoReviews[0].review)
    })
   
  }

  // -- Fonctionnalité : SUPPRESSION DES COMMENTAIRES -- //

  deleteReviews(reviewId) {
    console.log('>> deleteReviews #APP');
    console.log('#deleteReviews reviewId', reviewId);
    var url = `${Config.host}/api/review/${reviewId}/`;
    console.log('#deleteReviews url', url);
    fetch(url, {
      method: 'DELETE'
    }).then((res) => {
      return res.json()
    }).then((data)=>{
      console.log('#deleteReviews data', data)
    })

    this.displayReviews()
    console.log('<< deleteReviews #APP');
  }

  
  // -- Fonctionnalité : RECUPERATION DE LA VALEUR DU COMMENTAIRE -- //

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  // RENDER \\
  render() {
    console.log('#Reviews render this.state', this.state.infoReviews)
    return (
      <div>
        <form className="d-inline-flex" style={{width:"100%"}}>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={this.state.comment} onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}></textarea>
          <Button className="btn" type="submit" onClick={this.send} style={{marginLeft: 15}}>Envoyer</Button>
        </form>
        <div>
          {this.state.infoReviews.map((review, index) =>{
            // Reviews
            return (
              <Review key={index} review={review} onClick={this.deleteReviews}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReviewContainer;
