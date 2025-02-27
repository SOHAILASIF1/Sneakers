import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import allApi from "../../commen";
import { setUserDetail } from "../../reducers/userSlice";
import {toast} from 'react-toastify'
import Role from "../../commen/role";

function Header() {
  const dispatch=useDispatch()
  const user=useSelector((state)=>state?.user?.user)
  const handleLogout=async()=>{
    const dataRes=await fetch(allApi.logout.url,{
      method:allApi.logout.method,
      credentials:"include"
    })
    const resp=await dataRes.json()
    if (resp.success) {
      dispatch(setUserDetail(resp?.data))
      toast.success(resp.message)
      
    }
    if (resp.error) {
      toast.error(resp.message)
      
    }
  }
  return (
    <div className="header">
     
        
          <div className="header-logo">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="header-links">
              <li>
                <Link to={"/collection"}>Collections</Link>
              </li>

              <li>
                <Link to={"/mens"}>Mens</Link>
              </li>
              <li>
                <Link to={"/women"}>Womens</Link>
              </li>

              <li>
                <Link to={"/all"}>All</Link>
              </li>
            </div>
          </div>
        
        <div className="header-button">
            <div className="cart-button">
                <FaCartShopping/>
            </div>
            <div className="cart-button">
                {
                  user?.role === Role.ADMIN && (
                    <FaUser/>
                  )
                }
            </div>
            <div>
              <h6>{user?.name}</h6>
            </div>
            <div>
              {
                user?._id ? (
                  <button onClick={handleLogout} className="btn">
                    Logout

                  </button>

                ):(
                  <Link to={'/login'} className="btn">Login</Link>

                )
              }
           

            </div>
           

        </div>
      
    </div>
  );
}

export default Header;
