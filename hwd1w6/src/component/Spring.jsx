import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Spring() {
  return (
    <>
      <div className="card image-full h-screen rounded-none ">
          <figure className=''>
            <img
            className="w-full"
              src="https://i.pinimg.com/564x/ab/46/e8/ab46e89eaae27717ac34a111f1c1f35c.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex items-center h-full justify-center text-3xl text-center m-auto max-sm:text-sm">
            <h1>ربيع</h1>
            <Link to='#' className="card-title text-3xl max-sm:text-sm" > شباب بلا أحلام ربيع بلا زهور.</Link>
          </div>
        </div>
        <Home/>
    </>
  )
}

export default Spring
