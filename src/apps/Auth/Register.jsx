import React from 'react'
import cls from '../../style/Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../../api'



const Register = () => {
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')
  const [userName , setUserName] = React.useState('')
  
  const [loading , setLoading] = React.useState(false)
  
  const navigate = useNavigate()
  


  const handelSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if(email && userName && password){
      signUp({
        email,
        userName,
        password,
      })
      .then(r => {
        if(r.data.id){
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
      <div className={cls.background_register}>
        <div className={cls.dropdawn}>
          <form onSubmit={handelSubmit}>
            <div className={cls.register_container}>
              <div className={cls.register_row}>

                <input 
                  className={cls.register_inputs}
                  type={'text'}
                  placeholder={'Email'}
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  name={'email'}
                />

                <input 
                  className={cls.register_inputs}
                  type={'password'}
                  placeholder={'Password'}
                  defaultValue={password}
                  onChange={e => setPassword(e.target.value)} 
                  name={'password'}
                />

              </div>
              <div className={cls.register_row}>
                  <input 
                    className={cls.register_inputs}
                    type={'userName'}
                    placeholder={'UserName'}
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} 
                    name={'userName'}
                  />
              </div>
            </div>


              <Link style={{display:'flex' , justifyContent:'center' , color:'black' , textDecoration:'none'}} to='/login'>
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

export default Register




// mahmut

// badullloh