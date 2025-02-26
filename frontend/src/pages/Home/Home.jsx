import React from 'react'
import './Home.css'
import home from '../../assets/hero-sneaker.png'

function Home() {
  return (
    <div className=''>
      <div className='home-main'>
        <div className='home-heading'>
          <div className='home-title'>
            <h2> Discover your dream sneakers</h2>
            <p>ith a wide range of quality and affordable sneakers to choose from, browse through our collections for that sneakers you’ve always wanted.</p>
          </div>
         <button className='btn'>
          Exploe Product
         </button>

        </div>
        <div className='home-image' >
          <img src={home} alt="" />

        </div>

      </div>

    </div>
  )
}
 
export default Home