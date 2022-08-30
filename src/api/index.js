
import instance from './api';


export const signIn = data => instance.post(`auth/token/login/` , data)

// export const users = (data) => instance.get(`auth/users/` , data)

export const getUser = data => instance.get(`auth/users/`, data)


export function signUp(d){
  
  let data = {
    "email": d.email ,
    "username": d.userName,
    "password": d.password
}

  return instance.post('auth/users/' , data)
}
