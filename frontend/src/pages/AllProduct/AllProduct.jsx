import React, { useState } from 'react'
import './AllProduct.css'
import UploadProduct from '../../component/UploadProduct/UploadProduct'

function AllProduct() {
  const [openProduct,setOpenProduct]=useState(false)
  return (
    <div className='main-allProduct'>
      <div className='button-products'>
        
        <h2 className='heading-product'>All Product</h2>
       
       
        <button className='btn' onClick={()=>setOpenProduct(true)}>
          Upload Product
        </button>

     
        
       

      </div>
      <div className='fetch-product'>

      </div>
      {
        openProduct && (
          <UploadProduct onClose={()=>setOpenProduct(false)}/>
          
        )

      }

      
    </div>
  )
}

export default AllProduct