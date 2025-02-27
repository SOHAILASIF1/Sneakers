
import React, { createContext, useEffect } from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import allApi from './commen';
import { useDispatch } from 'react-redux';
import { setUserDetail } from './reducers/userSlice';
 export const Context=createContext(null)


function App(){
  const dispatch=useDispatch()
  const fetchData=async()=>{
    const datares=await fetch(allApi.userDetail.url,{
      method:allApi.userDetail.method,
      credentials:"include"
    })
    const resp=await datares.json()
    if (resp.success) {
      dispatch(setUserDetail(resp.data))
      
      
    }


  
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Context.Provider value={{fetchData}}>
    <BrowserRouter>
    <ToastContainer/>
    
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
