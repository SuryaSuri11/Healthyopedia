import React from 'react';
import {useEffect,useState} from 'react';
import Navbar from './Navbar';

function NavbarResize() {
  const [width, setWidth] = useState(window.innerWidth)
  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[]);
      return <Navbar appwidth={width}/>
}

export default NavbarResize;