import React, { useContext } from 'react'
import Header from './Headers/Header'
import Form from './login/Form'
import Footer from './footer/Footer'
import { AuthContext } from '../store/AuthContext'

const Wrapper = () => {
    const context = useContext(AuthContext)
    console.log(context);
  return (
    <div>
    <Header />
      {!context.isValid && <Form />}
      {context.isValid && <Footer/>}
      {/* <Counter/> */}
    </div>
  )
}

export default Wrapper
