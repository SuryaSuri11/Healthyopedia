import React, {useState} from 'react';
import  './Navbar.css';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Products from './Products';
import Dropdown from "./Dropdown";
import { useLocation } from 'react-router-dom';

function Navbar(props) {
    const[sidebar,setSidebar]=useState(false);
    const showSidebar=() => setSidebar(!sidebar)
    const location=useLocation();
    
    const[navbar,setNavbar]=useState(false);
    const[dropdown,setDropdown]=useState(false);

    const [maindrop,setmaindrop]=useState(false);

    function changebackground(){
      if (window.scrollY>=500 || location.pathname!='/'){
         setNavbar(true);
      }
      else{
      setNavbar(false);
      }
   };
      function Dropdownlist(){
         if(dropdown==true)
         setDropdown(false);
         else
         setDropdown(true);
      };
    window.addEventListener('scroll',changebackground)
    return (
<div className='Navcontents'>
   <header className={navbar ? 'navbar active' : 'navbar'}>
       <GiIcons.GiHamburgerMenu size='2rem' onClick={showSidebar} className='sidebaricon' size="2.5em"/>
       <h1 className='logo'>Health Site</h1>
      {props.appwidth>1180 && <ul className='nav-links'>
         <Link to='/' className={navbar ? 'mainitems active': 'mainitems'}> 
             <li className='topnav'>Home</li>
         </Link>
         <Link to='/aboutus' className={navbar ? 'mainitems active': 'mainitems'} onMouseEnter={()=>setmaindrop(true)} onMouseLeave={()=>setmaindrop(false)}> 
             <li  className='topnav' >About</li>
             {maindrop && <Dropdown/>}
         </Link>
         <Link to='/contactpage' className={navbar ? 'mainitems active': 'mainitems'} > 
             <li  className='topnav'>Contact</li>
         </Link>
         <Link to='/dashboard' className={navbar ? 'mainitems active': 'mainitems'}> 
             <li  className='topnav'>DashBoard</li>
         </Link>
         <Link to='/login' className={navbar ? 'mainitems active': 'mainitems'}> 
             <li  className='topnav'>Login</li>
         </Link>
         <Link to='/search' className={navbar ? 'mainitems active': 'mainitems'}> 
             <li  className='topnav'>Search</li>
             <FaIcons.FaSearch className='searchicon'/>
         </Link>
       </ul>}
    </header>
     <div className={sidebar ? 'sidenav active' : 'sidenav'}>
            <AiIcons.AiOutlineClose onClick={showSidebar} color='white' className='icon' color="black"/>
         <ul>   
               <li>
                   <Link to='./shoppage' className='menu-items'>
                       <Products/>
                   </Link>
                </li>
                <li>
                   <Link to='./onlineappointment' className='menu-items' onClick={showSidebar}>
                      <h2 className='sidebarheadings'> Online-Appointment</h2>
                   </Link>
                </li>
                <li>
                   <Link to='./blogpage' className='menu-items' onClick={showSidebar}>
                      <h2 className='sidebarheadings'> Blog </h2>
                   </Link>
                </li>
               {props.appwidth<1180 && <div><li>
                   <Link to='/' className='mainitems active' onClick={showSidebar}> 
                        <h2 className='mobileviewsidebarheadings'>Home</h2>
                     </Link>
                </li>
                <li>
                   <Link to='/aboutus' className='mainitems active' onClick={Dropdownlist}> 
                        <h2 className='mobileviewsidebarheadings'>About</h2>
                   </Link>
                   <div>
                      {dropdown && (
                           <ul className='activesubmenu'>
                           <li onClick={dropdown}>
                               <Link to='/'className='mainitems active' onClick={showSidebar}> 
                                  Aboutus Contents
                               </Link>
                           </li>
                           <li onClick={dropdown}>
                               <Link to='/' className='mainitems active' onClick={showSidebar}>
                                  Aboutus Contents
                               </Link>
                           </li>
                           <li onClick={dropdown}>
                               <Link to='/' className='mainitems active' onClick={showSidebar}>
                                  Aboutus Contents
                               </Link>
                           </li>
                           <li onClick={dropdown}>
                               <Link to='/' className='mainitems active' onClick={showSidebar}>
                                  Aboutus Contents
                               </Link>
                           </li>
                           <li onClick={dropdown}>
                               <Link to='/' className='mainitems active' onClick={showSidebar}>
                                  Aboutus Contents
                               </Link>
                           </li>
                       </ul>
                      )
                      }
                   </div>
                </li>
                <li>
                   <Link to='/contactpage' className='mainitems active' onClick={showSidebar}> 
                        <h2 className='mobileviewsidebarheadings'>Contact</h2>
                    </Link>
                </li>
                <li>
                   <Link to='/dashboard' className='mainitems active' onClick={showSidebar}> 
                        <h2 className='mobileviewsidebarheadings'>DashBoard</h2>
                   </Link>
                </li>
                <li>
                   <Link to='/login' className='mainitems active' onClick={showSidebar}> 
                     <h2 className='mobileviewsidebarheadings'>Login</h2>
                   </Link>
                </li>
                <li>
                   <Link to='/search' className='mainitems active'onClick={showSidebar}> 
                      <h2 className='mobileviewsidebarheadings'>Search</h2>
                   </Link>
                </li> </div>}
            </ul>
      </div>
</div>
  );
}
export default Navbar;
