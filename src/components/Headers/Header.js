import React, { useContext } from 'react'
import "./Header.css"
import Navigation from './Navigation.js'
import Button from '../UI/Button.js'
import { AuthContext } from '../../store/AuthContext'
import Photo from "../../assets/images/logo.png"
const Header = (props) => {
  const context = useContext(AuthContext)
  return (
    <div className='header'>

<div className='logo'>
<img src={Photo} alt="img"/>
<h1>Belllio</h1>
</div>

     <div className='menu'>
      <a href='#'>Home</a>
      <a href='#'>Destinations</a>
      <a href='#'>About</a>
      <a href='#'>Partner</a>
     
     </div>
      <div className='singIn'>
      <Button  title="Contact"/>
      <Button title="About US"/>
      </div>
      {context.isValid && <Navigation onShowLogout={props.onShowLogout} />}
    </div>
  )
}



export default Header
