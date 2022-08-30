// import React from 'react'
// import { Link } from 'react-router-dom'
// import { getUser} from '../api'
// import cls from '../style/Header.module.scss'
// import { navList } from '../utils/HeaderUtils'

// const Header = () => {

//   const setUsers = () => {
//     getUser().then(r => console.log(r))
//   }

//   React.useEffect(() => {
//     setUsers()
//   } , [])
  
//   return (
//     <React.Fragment>
//         <div className={cls.container}>
//         <div className={cls.container}>
//           <h1 className={cls.logo}>OLOLO</h1>
      
//           <ul className={cls.list}> 
//             {
//               navList.map((item , i) => <li key={i}>
//                 <Link to={item.path}>
//                     {item.title}
//                 </Link>
//               </li>
//               )
//             }
//             {
//               navList.map(item => <li key={item.id}>
                
//               </li>
//               )
//             }
//           </ul>
//         </div>
//         <div className={cls.banner}>
//           <h1 className={cls.bannet_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia delectus reprehenderit fugit. Voluptates, nihil illo facilis vitae voluptatum rerum enim quas quo libero doloremque voluptate! Officia culpa rerum ducimus laudantium!</h1>
//           <Link to='/register' className={cls.resume_btn}>создать резюм</Link>
//         </div>
//       </div>

//     </React.Fragment>
//   )
// }

// export default Header




















import React from 'react'
import { getUser} from '../api'
import cls from '../style/Header.module.scss'
import {IoLogoPolymer} from 'react-icons/io'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import { navList } from '../utils/HeaderUtils'
import Dropdown from './Dropdawn'



const Header = () => {

  const setUsers = () => {
    getUser().then(r => console.log(r))
  }

  React.useEffect(() => {
    setUsers()
  } , [])
  


  // let btn = document.querySelector("#btn")
  // let sidebare = document.querySelector(".sidebare")
  // let search = document.querySelector("bx_search")

  // btn.click = function(){
  //   sidebare.classList.toggle("active")
  // }
  const [isDropdown , setIsDropdown] = React.useState(false)


  function handleSubmit(){
    setIsDropdown(true)
    
  }


  return (
    <React.Fragment>
      <div className={cls.sidebare}>
        <div className={cls.logo_container}>
          <div className={cls.logo}>
            {/* <i><IoLogoPolymer /></i> */}
            {/* <div className={cls.logo_name}>ololo</div> */}
          </div>


          <i onClick={handleSubmit}>
            <AiOutlineMenu id={cls.btn} />
          </i>
          <Dropdown 

            isActive={isDropdown}
            setActive ={setIsDropdown}
          />


        </div>
        <ul className={cls.nav_list}>
            <li>
              <i className={cls.bx_search}><BsSearch /></i>
              <input type="text" placeholder='Search' />
              <span className={cls.tooltip}>Search</span>
            </li>
            {
              navList.map(item => <li key={item.id}>
                <a href="">
                  <i>{item.logo}</i>
                </a>
                <span className={cls.tooltip}>{item.span}</span>
              </li>
              )
            }
        </ul>
        <div className={cls.profile_content}>
            <div className={cls.profile}>

              <BiLogOut id={cls.log_out}/>
            </div>
        </div>
      </div>
      {/* <div className={cls.home_content}>
        <div className={cls.text}>Home Content</div>
      </div> */}


      <div className={cls.sidebare}>
        <div className={cls.logo_container}>
          <div className={cls.logo}>
            <i><IoLogoPolymer /></i>
            <div className={cls.logo_name}>ololo</div>
          </div>


          <i onClick={handleSubmit}>
            <AiOutlineMenu id={cls.btn} />
          </i>
          <Dropdown 

            isActive={isDropdown}
            setActive ={setIsDropdown}
          />


        </div>
        <ul className={cls.nav_list}>
            <li>
              <i className={cls.bx_search}><BsSearch /></i>
              <input type="text" placeholder='Search' />
              <span className={cls.tooltip}>Search</span>
            </li>
            {
              navList.map(item => <li key={item.id}>
                <a href="">
                  <i>{item.logo}</i>
                  <span className={cls.links_name}>{item.title}</span>
                </a>
                <span className={cls.tooltip}>{item.span}</span>
              </li>
              )
            }
        </ul>
        <div className={cls.profile_content}>
            <div className={cls.profile}>
              <div className={cls.profile_detals}>
                <img src="https://www.hdcarwallpapers.com/walls/2012_lexus_lf_lc_blue_concept-wide.jpg" alt="" />
                <div className={cls.name_job}>
                  <p className={cls.name}>Prem Shahi</p>
                  <p className={cls.job}>web Designer</p>
                </div>
              </div>
              <BiLogOut id={cls.log_out}/>
            </div>
        </div>
      </div>
      <div className={cls.home_content}>
        <div className={cls.text}>Home Content</div>
      </div>

      

    </React.Fragment>
  )
}

export default Header




























// <div className={cls.sidebare}>
//         <div className={cls.logo_container}>
//           <div className={cls.logo}>
//             <i><IoLogoPolymer /></i>
//             <div className={cls.logo_name}>ololo</div>
//           </div>


//           <i onClick={handleSubmit}>
//             <AiOutlineMenu id={cls.btn} />
//           </i>
//           <Dropdown 

//             isActive={isDropdown}
//             setActive ={setIsDropdown}
//           />


//         </div>
//         <ul className={cls.nav_list}>
//             <li>
//               <i className={cls.bx_search}><BsSearch /></i>
//               <input type="text" placeholder='Search' />
//               <span className={cls.tooltip}>Search</span>
//             </li>
//             {
//               navList.map(item => <li key={item.id}>
//                 <a href="">
//                   <i>{item.logo}</i>
//                   <span className={cls.links_name}>{item.title}</span>
//                 </a>
//                 <span className={cls.tooltip}>{item.span}</span>
//               </li>
//               )
//             }
//         </ul>
//         <div className={cls.profile_content}>
//             <div className={cls.profile}>
//               <div className={cls.profile_detals}>
//                 <img src="https://www.hdcarwallpapers.com/walls/2012_lexus_lf_lc_blue_concept-wide.jpg" alt="" />
//                 <div className={cls.name_job}>
//                   <p className={cls.name}>Prem Shahi</p>
//                   <p className={cls.job}>web Designer</p>
//                 </div>
//               </div>
//               <BiLogOut id={cls.log_out}/>
//             </div>
//         </div>
//       </div>
//       <div className={cls.home_content}>
//         <div className={cls.text}>Home Content</div>
//       </div>