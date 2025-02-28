import React, { useEffect, useState } from 'react'
import './AllUser.css'
import allApi from '../../commen'

function AllUser() {
    const [data,setData]=useState([])
    const fetchAllUser=async()=>{
        const dataRes=await fetch(allApi.allUser.url,{
            method:allApi.allUser.method,
            credentials:"include"
        })
        const resp=await dataRes.json()
        console.log(resp);
        if (resp.success) {
            setData(resp?.data)
            
        }

    }
    useEffect(()=>{
        fetchAllUser()

    },[])
    console.log(data);
  return (
    <div>
    <h2>All Users</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((user) => (
                <tr key={user?._id}>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.role}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default AllUser