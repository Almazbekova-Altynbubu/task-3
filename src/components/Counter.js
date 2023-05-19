import React, { useReducer } from 'react'

function reducerCounter(state, action){
    console.log(action);
    if(action === "PLUS"){
        return state+1
    }
    
    if(action === "MINUS"){
        return state-1
    }

    return state
}

const Counter = () => {
    const [counter, dispatchCounter] = useReducer(reducerCounter, 0)

    const plusHandler=()=>{
        dispatchCounter("PLUS")
    }
    const minusHandler=()=>{
        dispatchCounter("MINUS")
    }
  return (
    <div>
      <button onClick={plusHandler}>+</button>
      <h1>{counter}</h1>
      <button onClick={minusHandler}>-</button>
    </div>
  )
}

export default Counter
