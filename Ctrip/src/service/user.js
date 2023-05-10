import axios from './config'

export const Login = (username, password) => {
    return axios.get('/login', {
        params: {
            userName: username,
            password: password,
        }
    })
}

export const Register = (username, password) => {
    return axios.get('/register', {
        params: {
            userName: username,
            password: password,
        }
    })
}