import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../api'
import cls from '../../style/Login.module.scss'

const Login = () => {
  const [email , setEmail] = React.useState('') 
  const [password , setPassword] = React.useState('') 
  const [error , setError] = React.useState('')
  const [loading , setLoading] = React.useState(false)

  
  const navigate = useNavigate()



  const handleSubmit = e => {  
    e.preventDefault()


    setLoading(true)
    

    if(email && password ) {
      signIn({
        email,
        password,
      })
      .then(r => {
        if (r.auth_token){
          localStorage.setItem('authToken' , r.auth_token)
          navigate('/')
        } else {
          setError(r)
        }
      })
      .finally(() => {
        setLoading(false)
      })
    } else {
      setError('Заполните все поля!')
      setLoading(false)
    }
  }


  return (
    <React.Fragment>
      {/* <div className={cls.background_login}>
        <div className={cls.dropdawn}>
          <from onSubmit={handleSubmit}>
            <div className={cls.login_container}>
              <div className={cls.login_row}>

                <input 
                  className={cls.login_inputs}
                  type={'text'}
                  placeholder={'Email'}
                />
                
              </div>
              <div className={cls.login_row}>

                <input 
                  className={cls.login_inputs}
                  type={'password'}
                  placeholder={'Password'}
                />

              </div>
            </div>

            <Link  style={{display:'flex' , justifyContent:'center' , color:'black' , textDecoration:'none'}} to='/register'>
              go to Register
            </Link>

            <div style={{display:'flex' , justifyContent:'center'}}>
              <button 
                className={cls.signup_btn}
                type='submit'
              >
                Sign up
              </button>
            </div>

          </from>
        </div>
      </div> */}
       <div className={cls.root}>
        <form onSubmit={handleSubmit}>
          <label >
            <span>
              <p>Email:</p>
                <input 
                  type="text"
                  placeholder='test@gmail.com' 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                />
            </span>
          </label>
          <label >
            <span>
              <p>Password:</p>
                <input 
                  type="password"
                  placeholder='Test123' 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                />
            </span>
          </label>

          {
            error && (
              <h5 className={cls.error}>
                Неверный логин или пароль!
              </h5>
            )
          }

          <button 
            type='submit' 
            className={cls.submit}
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Login