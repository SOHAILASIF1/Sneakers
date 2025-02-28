import React, { useState } from 'react'
import './UploadProduct.css'
import { IoClose } from "react-icons/io5";
import productCategory from '../../helper/productCategory';

function UploadProduct({onClose}) {
  const [data,setData]=useState({
    productName:"",
    brandName:"",
    category:"",

    productImage:[],
    price:"",
    selling:""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className='main-upload'>
        <div className='product-upload'> 
        <div className='title-upload'>
          <h2>Upload Product</h2>
          <div className='closeButton' onClick={onClose}>
            <IoClose/>

          </div>
          
        </div>
        <form action="">
          <div className='login-input'>
            <label htmlFor="productName">Product Name</label>
            <input 
            type='text'
            onChange={handleChange}
            name='productName'
            id='productName'
            value={data.productName}
            />
          </div>
          <div className='login-input'>
            <label htmlFor="category">Category</label>
           <select 
           className='login-input'
            type='text'
            onChange={handleChange}
            name='category'
            id='category'
            value={data.category}>
              {productCategory.map((el,i)=>{
                return (
                  <option value={el.value}>{el.label}</option>
                )
              })}
            </select>
          </div>
          <div className='login-input'>
            <label htmlFor="brandName">Brand Name</label>
            <input 
            type='text'
            onChange={handleChange}
            name='brandName'
            id='brandName'
            value={data.brandName}
            />
          </div>
        </form>
        
        </div>

    </div>
  )
}

export default UploadProduct