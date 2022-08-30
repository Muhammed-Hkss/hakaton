import {BsChatLeftDots} from 'react-icons/bs'
import {BiPieChartAlt2} from 'react-icons/bi'
import {AiOutlineUser , AiOutlineFolderOpen , AiOutlineShoppingCart , AiOutlineSetting } from 'react-icons/ai'
import {FiHeart , FiGrid} from 'react-icons/fi'



export const navList = [
  {
    id:1,
    logo:<FiGrid />,
    title:'Dashboard',
    span:'Dashboard',
    path:'/',
  },
  {
    id:2,
    logo:<AiOutlineUser/>,
    title:'User',
    span:'User',
    path:'/',
  },
  {
    id:3,
    logo:<BsChatLeftDots/>,
    title:'Messages',
    span:'Messages',
    path:'/',
  },
  {
    id:4,
    logo:<BiPieChartAlt2 />,
    title:'Analytics',
    span:'Analytics',
    path:'/',
  },
  {
    id:5,
    logo:<AiOutlineFolderOpen />,
    title:'File Manager',
    span:'File Manager',
    path:'/',
  },
  {
    id:6,
    logo:<AiOutlineShoppingCart />,
    title:'Order',
    span:'Order',
    path:'/',
  },
  {
    id:7,
    logo:<FiHeart />,
    title:'Saved',
    span:'Saved',
    path:'/',
  },
  {
    id:8,
    logo:<AiOutlineSetting />,
    title:'Setting',
    span:'Setting',
    path:'/',
  },
  // {
  //   id:5,
  //   admin:<RiAdminLine />,
  //   path:'/admin',
  // },
]