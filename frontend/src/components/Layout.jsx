import {Outlet} from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
import { useState } from 'react';


function Layout() {

  const [cityDetail,setCityDetail]=useState([])
  const [cityDetail2,setCityDetail2]=useState([])


    return ( 
      <>
        <Navbar d1={cityDetail} f1={setCityDetail} 
        d2={cityDetail2} f2={setCityDetail2}/>
        <Outlet context={[cityDetail,cityDetail2]}  />
        <Footer/>
        </>
     );
}


export default Layout;