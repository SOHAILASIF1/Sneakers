import React from 'react'
import "./AdminPanel.css"
import logo from "../../assets/logo.svg";
import {Link, Outlet} from 'react-router-dom'

function AdminPanal() {
  return (
    <div className='main-admin'>
        <div className='left-admin'>
            <div className='left-admin-logo'>
                <img src={logo} alt="" />

            </div>
            <div className='left-admin-links'>
              <li><Link to={"/adminPanel/allUser"}>All User</Link></li>
             <li><Link to={"/adminPanel/allProduct"}>All Products</Link></li>


            </div>

        </div>
        <div className='right-admin'>
          <Outlet/>

        </div>
        
    </div>
  )
}

export default AdminPanal