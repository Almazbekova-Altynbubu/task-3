import React, { useContext } from 'react'
import Button from '../UI/Button'
import { AuthContext } from '../../store/AuthContext'
import"./Navigation.css"


const Navigation = () => {
  const context = useContext(AuthContext)
  return (
    <div className='ButtonLogOut'>
      <Button onClick={context.showLogout} title="LogOut"/>
    </div>
  )
}



export default Navigation
