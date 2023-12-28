import React from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

export default function Logout() {

  const { logoutUser } = useUser()
  
  const navigate = useNavigate();

  const logout = () =>{
    logoutUser()
    navigate('/')
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
