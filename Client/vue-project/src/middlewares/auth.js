import {apiClient} from '@/middlewares'

async function verificarToken(token) {
    if (!token) {
        return false;
    }

    apiClient.post('auth', null, {
        headers: {
            Authorization: 'Bearer ' + token
        }

    })

}

export default verificarToken 