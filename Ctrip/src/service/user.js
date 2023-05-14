import axios from './config'

export const Login = (params) => {
    return axios.get('/login', params)
}

export const Register = (params) => {
    return axios.get('/register', params)
}