import React from "react";
import Sea from "./Sea";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
     <div className="container-box grid grid-cols-5 gap-5 w-screen max-md:grid-cols-3 max-sm:grid-cols-2 bottom-0 p-4">
  <div className="card bg-base-100 image-full shadow-xl h-60 max-sm:h-48">
    <figure className="overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://i.pinimg.com/564x/29/89/82/29898216f7f21030701077060907d0c0.jpg"
        alt="Shoes"
      />
    </figure>
    <div className="card-body flex items-center justify-center">
      <Link to='/mountain' className="card-title text-3xl max-sm:text-lg">جبل</Link>
    </div>
  </div>

  <div className="card bg-base-100 image-full shadow-xl h-60 max-sm:h-48">
    <figure className="overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://i.pinimg.com/564x/8f/6a/e7/8f6ae767eff013ffc6356329d96fe572.jpg"
        alt="Shoes"
      />
    </figure>
    <div className="card-body flex items-center justify-center">
      <Link to='/sea' className="card-title text-3xl max-sm:text-lg">بحر</Link>
    </div>
  </div>

  <div className="card bg-base-100 image-full shadow-xl h-60 max-sm:h-48">
    <figure className="overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://i.pinimg.com/564x/ff/42/49/ff4249398249fc12bd032c32c178d199.jpg"
        alt="Shoes"
      />
    </figure>
    <div className="card-body flex items-center justify-center">
      <Link to='/autumn' className="card-title text-3xl max-sm:text-lg">خريف</Link>
    </div>
  </div>

  <div className="card bg-base-100 image-full shadow-xl h-60 max-sm:h-48">
    <figure className="overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://i.pinimg.com/564x/b6/95/0e/b6950e4cd1d6bd7647a9488907745c2c.jpg"
        alt="Shoes"
      />
    </figure>
    <div className="card-body flex items-center justify-center">
      <Link to='/desert' className="card-title text-3xl max-sm:text-lg">صحراء</Link>
    </div>
  </div>

  <div className="card bg-base-100 image-full shadow-xl h-60 max-sm:h-48">
    <figure className="overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://i.pinimg.com/564x/b4/60/0b/b4600b612afa7af00e1d68783d8ea21a.jpg"
        alt="Shoes"
      />
    </figure>
    <div className="card-body flex items-center justify-center">
      <Link to='/spring' className="card-title text-3xl max-sm:text-lg">ربيع</Link>
    </div>
  </div>
</div>


    </>
  );
}

export default Home;
