import React from 'react'
import { useState } from 'react'
import { useLazyLoginUserQuery } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { updateLoginDetails } from './userSlice'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [user,setUser] = useState({
        username:'',
        password:''
    })
   const [authUser] =  useLazyLoginUserQuery()
   const navigate = useNavigate()
   const dispatch = useDispatch()
    const handleUsername = (e) => {
        setUser({...user,username:e.target.value})
    }
    const handlePassword = (e) => {
        setUser({...user,password:e.target.value})
    }
    const handleLogin = () => {
        authUser(user).then((res) => {
            dispatch(updateLoginDetails(res.data[0]))
            navigate("/addLead")
            console.log("res::",res.data[0])
        })
    }
  return (
    <div>
        <h3> Login </h3>
        <input type="text" name="username" placeholder='enter username' onChange={handleUsername}/> <br/>
        <input type="password" name="password" placeholder='enter password' onChange={handlePassword}/> <br/>
        <button onClick={handleLogin}>Login</button>
        </div>
  )
}

export default Login