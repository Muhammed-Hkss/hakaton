import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../apps/Auth/Login'
import Register from '../apps/Auth/Register'
import Colect from '../components'
// import Loader from '../components/Loader'

const LayoutRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Colect />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/account' element={<Loader />} /> */}
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes