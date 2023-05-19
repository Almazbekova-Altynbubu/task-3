import React from 'react'
import styled from 'styled-components'
import Calismiyor from "../../assets/images/404.avif"
const Footer = () => {
  return (
    <div>
      
      <StyleImg src={Calismiyor}/>
    </div>
  )
}

const StyleImg= styled.img`
width:500px;
height:500px;
margin-left:400px;
`


export default Footer
