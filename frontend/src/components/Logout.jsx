import React from 'react'
// import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';
import { signout } from '../api/UserAuth';

export default function Logout() {

  const { logoutUser } = useUser()
  
  // const navigate = useNavigate();

  const logout = () =>{
    signout().then(userAuth => {
      if (!userAuth.data.auth) {
        logoutUser();
      }
    }).catch(error => {
      console.error("Error during logout:", error);
    });
    // navigate('/')
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
