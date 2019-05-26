import Config from "../../Config";

class Api {
    getStyle(style){
        return fetch(`${Config.host}/api/effects/musiccategories/${style}`)
        .then(res => res.json())
        .then(data => data)
    };

    getCompositions(userId){
        return fetch(`${Config.host}/api/user/${userId}/composition`) 
        .then(res => res.json())
        .then(data => data)        
    };

    getAllCompositions(){
        return fetch(`${Config.host}/api/composition`) 
        .then(res => res.json())
        .then(data => data.data)        
    };

    getListens(trackId){
        return fetch(`${Config.host}/api/listen/composition/${trackId}`)
        .then(res => res.json())
        .then(data => data)
    };

    addListen(trackId){
        console.log("#API adding listen");
    }
}

export default new Api();