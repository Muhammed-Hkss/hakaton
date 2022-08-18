import React from 'react'
import { Link } from 'react-router-dom'
import cls from '../style/Header.module.scss'
import { navList } from '../utils/HeaderUtils'

const Header = () => {
  return (
    <div className={cls.container}>
      {/* <div className={cls.row}>
        <h1 className={cls.logo}>OLOLO</h1>
        <img className={cls.logo_img} src="https://media-exp1.licdn.com/dms/image/C510BAQEz7rN5CQsIlg/company-logo_200_200/0?e=2159024400&v=beta&t=UuMG6WHdgz0ai1A7rsVdJQplkpyYmNKmXgVcPMDuj_Q" alt="" />
        <ul className={cls.list}>
          {
            navList.map((item , i) => <li key={i}>
              <Link to={item.path}>
                  {item.title}
              </Link>
            </li>
            )
          }
        </ul>
      </div> */}
      <div className={cls.container}>
        <h1 className={cls.logo}>OLOLO</h1>
    
        <ul className={cls.list}> 
          {
            navList.map((item , i) => <li key={i}>
              <Link to={item.path}>
                  {item.title}
              </Link>
            </li>
            )
          }
        </ul>
      </div>
      <div className={cls.banner}>
          
      </div>
    </div>
  )
}

export default Header
