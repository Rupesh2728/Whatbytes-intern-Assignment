import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SideNavBar from '../components/SideNavBar/SideNavBar'
import Main from '../components/Main/Main'

const page = () => {
  return (
    <div className="bg-white">
       <NavBar/>
       <hr/>
       <div className="flex">
         <SideNavBar/>
         <Main/>
       </div>
    </div>
  )
}

export default page