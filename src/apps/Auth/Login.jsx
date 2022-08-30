import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../api'
import cls from '../../style/Login.module.scss'

const Login = () => {


  const [password , setPassword] = React.useState('')
  const [userName , setUserName] = React.useState('')
  
  const [loading , setLoading] = React.useState(false)
  
  const navigate = useNavigate()
  


  const handelSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if(password && userName){
      signIn({
        password,
        'username':userName,
      })
      .then(r => {
        if(r.data.auth_token){
          localStorage.setItem('authToken' , r.data.auth_token)
          navigate('/')
        }
      })
      .finally(() => {
        setLoading(false)
      }
    )
  }
}







  return (
    <React.Fragment>
      <div className={cls.background_login}>
        <div className={cls.dropdawn}>
          <form onSubmit={handelSubmit}>
            <div className={cls.login_container}>
              <div className={cls.login_row}>
                <input 
                  className={cls.login_inputs}
                  type={'userName'}
                  placeholder={'UserName'}
                  value={userName} 
                  onChange={e => setUserName(e.target.value)} 
                  name={'userName'}
                />
              </div>
              <div className={cls.login_row}>
                <input 
                  className={cls.login_inputs}
                  type={'password'}
                  placeholder={'Password'}
                  defaultValue={password}
                  onChange={e => setPassword(e.target.value)} 
                  name={'password'}
                />
              </div>
            </div>

              <Link style={{display:'flex' , justifyContent:'center' , color:'black' , textDecoration:'none'}} to='/register'>
                go to Login
              </Link>

            <div style={{display:'flex' , justifyContent:'center'}}>
              <button 
                type='submit'
                className={cls.signup_btn}
                disabled={loading}
              >
                Sign up
              </button>
            </div>

          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login