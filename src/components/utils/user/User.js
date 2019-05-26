import axios from 'axios';
import Config from '../../../Config';

const headers = {
    'Content-Type': 'application/json'
}
const burl = `${Config.host}`

export default {

    login : function(email,password) {
        return axios.post(burl + '/api/user/login',{
            'email' : email,
            'password' : password
        },{
            headers: headers
        })
    },
    
    signup : function(send){
        return axios.post(burl + '/api/user/signup',send,{headers: headers})
    },
    
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },

    logout : function() {
        localStorage.clear();
    }
}
//Ce fichier permet de lancer une requête d’authentification, d’enregistrement
// et comporte aussi deux méthodes permettant de vérifier si l’utilisateur est connecté à partir du localStorage.
