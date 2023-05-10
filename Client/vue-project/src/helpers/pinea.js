import {authStores} from "@/stores"

var payload = null


function evaluate(){
    const user = authStores()
    console.log(user);
    if(localStorage.getItem('token')){
        if(user.isLogged===false){
            payload = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
            Object.keys(payload).forEach((key)=> {
                Object.keys(user)[key] = payload[key]
                const cosit = `user.${key}`
                console.log(cosit);
                console.log(key, Object.keys(user)[key], payload[key]);
                eval(`${cosit} = '${payload[key]}'`);
            })
            user.isLogged=true

        }
    }


}

export default evaluate;