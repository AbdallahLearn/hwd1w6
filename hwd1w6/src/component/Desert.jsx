import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
function Desert() {
  return (
    <>
      <div>
    <div className="card image-full h-screen rounded-none ">
          <figure className=''>
            <img
            className="w-full"
              src="https://i.pinimg.com/564x/b6/95/0e/b6950e4cd1d6bd7647a9488907745c2c.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex items-center h-full justify-center text-3xl text-center m-auto max-sm:text-sm">
            <h1>صحراء</h1>
            <Link to='#' className="card-title text-3xl max-sm:text-sm w-[80%]" > لقد علمتنا الصحراء أن نصبر طويلاً حتى ينبت الخير، وعلينا أن نصبر ونواصل مسيرة البناء حتى نحقق الخير لوطننا.</Link>
          </div>
        </div>
        {/* <div className="pos absolute bottom-20"> */}
        <Home/>
        {/* </div> */}
        
      

    </div>
    </>
  )
}

export default Desert
