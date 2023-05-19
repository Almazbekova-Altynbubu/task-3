import React from 'react'

const Button = (props) => {
  return (
    <button disabled={props.disabled} onClick={props.onClick} style={{padding: props.padding }}>{props.title}</button>
  )
}

export default Button
