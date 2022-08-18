
import instance from './api';


export const signIn = data => instance.post(`auth/token/login/` , data)


export const getUser = (data , id) => instance.get(id , data)


export function signUp(d){
  
  let data = {
    "email": d.email ,
    "username": d.userName,
    "password": d.password
}

  return instance.post('auth/users/' , data)
}
