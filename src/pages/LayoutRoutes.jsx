import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../apps/Auth/Login'
import Register from '../apps/Auth/Register'
import Colect from '../components'

const LayoutRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Colect />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes