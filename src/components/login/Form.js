import React, {  useContext, useEffect, useReducer, useState } from 'react'
import "./Form.css"
import Button from '../UI/Button'
import { AuthContext } from '../../store/AuthContext'

const typeForm = {
  EMAIL_VALID: "EMAILVALID",
  EMAIL: "EMAIL",
  PASSWORD_VALID: "PASSWORDVALID",
  PASSWORD: "PASSWORD",
} 

const emailReducer=(state, action)=>{
  console.log(action.value);
  if(action.type === typeForm.EMAIL){
    return {
      ...state,
      email: action.value// a
    }
  }
  if(action.type === typeForm.EMAIL_VALID){
    return {
      ...state,
      isEmailValid: state.email.includes("@")
    }
  }
  return {
    ...state
  }
}

const passwordReducer=(state, action)=>{
  console.log(action);
  if(action.type === typeForm.PASSWORD){
    return{
      ...state,
      password: action.value
    }
  }
  if(action.type === typeForm.PASSWORD_VALID){
    return {
      ...state,
      isPasswordValid: state.password.trim().length > 5
    }
  }
}



const Form = () => {

  const context = useContext(AuthContext)
 

    const [emailValue, dispatchEmail] = useReducer(emailReducer, {
      email: "",
      isEmailValid: undefined
    })
    console.log(emailValue);
    const [passwordValue, dispatchPassword] = useReducer(passwordReducer, {
      password: "",
      isPasswordValid: undefined
    })
    console.log(passwordValue);
    const [validate, setValidate] = useState(false)
    console.log(validate);


    const emailHandler=(e)=>{
        dispatchEmail({type: typeForm.EMAIL, value: e.target.value}) // a
    }

    const passwordHandler=(e)=>{
        dispatchPassword({type: typeForm.PASSWORD, value: e.target.value})
    }

    const validateEmail=()=>{
      dispatchEmail({type: typeForm.EMAIL_VALID })
    }
    const validatePass=()=>{
      dispatchPassword({type: typeForm.PASSWORD_VALID})
    }

    

    useEffect(()=>{
      setValidate(emailValue.email.includes("@") && passwordValue.password.length > 5)
    },[emailValue.email,passwordValue.password ])
 

   
  return (
    <div  className='form'>
      <input 
        style={{border: emailValue.isEmailValid ===  false ? "2px solid red" : "1px solid black", outline: "none"}}
        onBlur={validateEmail}
        onChange={emailHandler}
        type="text" 
        placeholder='email' />
      <input 
        style={{border: passwordValue.isPasswordValid ===  false ? "2px solid red" : "1px solid black", outline: "none"}}
        onBlur={validatePass} 
        onChange={passwordHandler} 
        type="password" 
        placeholder='password' 
      />
      {<Button disabled={!validate} onClick={context.showLogout} title="click"/>}
    </div>
  )
}

export default Form
