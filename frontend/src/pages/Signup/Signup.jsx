import React, { useState } from 'react'
import '../Login/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import allApi from '../../commen'
import { toast } from 'react-toastify'

function Signup() {
    const [data,setData]=useState({
        name:"",
        email:""
    })
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const dataRes=await fetch(allApi.signup.url,{
            method:allApi.signup.method,
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const res=await dataRes.json()
        if (res.success) {
            toast.success(res.message)
            navigate("/login")
            
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
      console.log(data);
      
    
  return (
    <div className='login-main'>

    <div className='login-left'>
        <h2>Signup</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className='login-input'>
            <label htmlFor="">Name</label>
            <input type="text" 
            name='name'
            value={data.name}
            onChange={handleChange}
            />
        </div>
        <div className='login-input'>
            <label htmlFor="">Email</label>
            <input type="email" 
            name='email'
            value={data.email}
            onChange={handleChange}
            
            />
        </div>
        <div className='login-input'>
            <label htmlFor="">Password</label>
            <input type="password"
            name='password'
            value={data.password}
            onChange={handleChange}
            
            />
        </div>
        <button className='btn'>Signup</button>
        </form>
        

    </div>
    <div className='login-right'>
        <h2>Welcome To Signup</h2>
        <p>Already have a Account?</p>
        <Link to={'/login'} className='btn'>Login</Link>

    </div>

</div>
    
  )
}

export default Signup