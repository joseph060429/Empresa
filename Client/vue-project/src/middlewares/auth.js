import api from './axios'

async function verificarToken(token) {
    if (token === null) {
        return false;
    }

    api.post('auth', null, {
        headers: {
            Authorization: 'Bearer ' + token
        }

    })

}

function checkToken() {
    if(localStorage.getItem('token')){
        return true;
    } else{
        return false;
    }

}

function routerMiddleware(to, from, next){
    const token = localStorage.getItem('token')
    if(to.meta.requiresAuth){
        if(token){
            next();
        }else{
            next('login')
        }
    }

}

export default { checkToken, verificarToken, routerMiddleware }