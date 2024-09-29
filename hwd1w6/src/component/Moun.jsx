import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
function Moun() {
  return (
    <>
    <div>
    <div className="card image-full h-screen rounded-none ">
          <figure className=''>
            <img
            className="w-full"
              src="https://i.pinimg.com/564x/29/89/82/29898216f7f21030701077060907d0c0.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex items-center h-full justify-center text-3xl text-center m-auto max-sm:text-sm">
            <h1>جبل</h1>
            <Link to='#' className="card-title text-3xl max-sm:text-sm" >إن كان همتنا مثل جبل طويق .. أنت السحاب اللي على طويق ظله .</Link>
          </div>
        </div>
        <Home/>
      

    </div>
    </>
  )
}

export default Moun
