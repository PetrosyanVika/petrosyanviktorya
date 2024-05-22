import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './Layouts.scss'

export default function Layouts() {
  return (
    <div>
      <Navbar/>
      <h1>Discover and enjoy!</h1>
      <Outlet/>
    </div>
  )
}
