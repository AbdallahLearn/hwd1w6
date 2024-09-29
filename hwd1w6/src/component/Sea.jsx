import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
function Sea() {
  return (
    <>
    
    <div className="card image-full h-screen rounded-none ">
          <figure className=''>
            <img
            className="w-full"
              src="https://i.pinimg.com/564x/8f/6a/e7/8f6ae767eff013ffc6356329d96fe572.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex items-center h-full justify-center text-3xl text-center m-auto max-sm:text-sm">
            <h1>بحر</h1>
            <Link to='#' className="card-title text-3xl max-sm:text-sm" >تجري الرياح كما تجري سفينتُنا 
            نحن الرياح ونحن البحر والسفنُ</Link>
          </div>
        </div>
        <Home/>
      
    </>
  )
}

export default Sea
