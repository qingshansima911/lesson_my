import axios from './config'
import { User } from '@/store/my'

export const Login = (params: User) => {
  // console.log(params);
  return axios.post('/user:userName', params)
}

export const Register = (params: User) => {
  // console.log(params);
  return axios.post('/user', params)
}