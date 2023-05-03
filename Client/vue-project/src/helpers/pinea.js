import {authStores} from "@/stores"

var payload = null


function evaluate(){
    const user = authStores()
    if(localStorage.getItem('token')){
        if(!user.isLogged){
            payload = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).data
            Object.keys(payload).forEach((key)=> {
                Object.keys(user)[key] = payload[key]
                const cosit = `user.$¨{key}`
                console.log(cosit);
                console.log(key, Object.keys(user)[key], payload[key]);
                eval(`${cosit} = '${payload[key]}'`);
            })
            user.login()

        }
    }


}

export default evaluate;