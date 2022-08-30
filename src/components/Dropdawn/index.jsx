import React from "react";
import cls from './Dropdown.module.scss'
// import cls from '../../style/Header.module.scss'


const Dropdown = ({isActive , setActive}) => {
  return(
    <React.Fragment>
      <div className={isActive ? `${cls.root}` : 
        `${cls.root} ${cls.disabled}`
      }>
        <div className={cls.dropdawn}>


            <button 
              className={cls.claseBtn}
              onClick={() => {
                setActive(false)
              }}
              >
                &times;
            </button>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Dropdown
