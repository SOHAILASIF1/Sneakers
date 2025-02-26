import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import allApi from '../../commen'
import { toast } from 'react-toastify'

function Login() {
    const [data,setData]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const dataRes=await fetch(allApi.login.url,{
            method:allApi.login.method,
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const res=await dataRes.json()
        if (res.success) {
            toast.success(res.message)
            navigate("/")
            
        }
        if (res.error) {
            toast.error(res.message)
            
            
        }
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      
    
    
  return (
    <div className='login-main'>

        <div className='login-left'>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className='login-input'>
                <label htmlFor="">Email</label>
                <input 
                type="email" 
                value={data.email}
                name='email'
                onChange={handleChange}
                />
            </div>
            <div className='login-input'>
                <label htmlFor="">Password</label>
                <input 
                type="password"
                value={data.password}
                name='password'
                onChange={handleChange}
                
                />
            </div>
            <button className='btn'>Login</button>
            </form>
            <div className='login-input-forget'>
            <p>Forget Password</p>
            </div>

        </div>
        <div className='login-right'>
            <h2>Welcome To login</h2>
            <p>Dont Have a account?</p>
            <Link to={'/signup'} className='btn'>Sign Up</Link>

        </div>

    </div>
  )
}

export default Login