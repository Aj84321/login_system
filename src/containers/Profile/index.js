import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const navigate = useNavigate()

    const handleLogout = () =>{
    sessionStorage.removeItem("isLoggedIn");
        toast.success("Logged out successfully")
        navigate("/login");

    } 

  return (
    <>
        <button type="button" onClick={handleLogout}>Logout</button>
    </>

  )
}
