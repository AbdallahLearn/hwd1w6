import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sea from "../component/Sea";
import Home from "../component/Home";
import Moun from "../component/Moun";
import Autumn from "../component/Autumn";
import Spring from "../component/Spring";
import '../App.css'
const router = createBrowserRouter([
   {
    path: '',
    element: <Home/>
   },
   {
    path: 'sea',
    element: <Sea/>
   },
   {
    path:'mountain',
    element: <Moun/>
   },
   {
    path: 'autumn',
    element: <Autumn/>
   },
   {
    path: 'desert',
    element: <Desert/>
   },
   {
    path: 'spring',
    element: <Spring/>
   }
])

import React from 'react'
import Desert from "../component/Desert";
// import Home from "../component/Home";

function Router() {
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default Router



