import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
function Autumn() {
  return (
    <>
        <div>
    <div className="card image-full h-screen rounded-none">
          <figure className=''>
            <img
            className="w-full"
              src="https://i.pinimg.com/564x/ff/42/49/ff4249398249fc12bd032c32c178d199.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex items-center h-full justify-center text-3xl text-center m-auto max-sm:text-sm">
            <h1>خريف</h1>
            <Link to='#' className="card-title text-3xl max-sm:text-sm" >أولسنا نزداد تألقاً وحكمة حين نصل خريف العمر.</Link>
          </div>
        </div>
        <Home/>
      

    </div>
    </>
  )
}

export default Autumn
