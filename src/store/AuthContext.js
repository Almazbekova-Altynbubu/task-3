import { createContext, useState } from "react";

export const AuthContext = createContext({
    isValid: false
})


export const AuthProvider = (props)=>{
    const [isValid, setISValid] = useState(false)

    const showLogout=()=>{
        setISValid((prev)=>{
          return !prev
        })
    }
    const state = {
        isValid,
        showLogout,
    }

    return <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
}

