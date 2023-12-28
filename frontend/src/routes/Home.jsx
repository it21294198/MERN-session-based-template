import React from 'react'
import { Link } from "react-router-dom";
import { useUser } from '../context/UserContext';
import Logout from '../components/Logout'

export default function Home() {
  const { userName } = useUser();
  return (
    <div>
    <div>Home {userName}</div>
    <Logout/>
    </div>
  )
}