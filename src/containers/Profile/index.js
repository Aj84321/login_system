import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/authSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // sessionStorage.removeItem("isLoggedIn");
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
