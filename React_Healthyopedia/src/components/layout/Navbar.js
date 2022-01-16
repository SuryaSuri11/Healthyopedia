import React, { useState } from 'react';
import './Navbar.css';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
// import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LoginPage from "../../pages/Login";
import Onlineappoint from './Onlineconsultation';
import { useHistory } from 'react-router';


function Navbar(props) {
   const history=useHistory();
   var nothome = "";
   const [sidebar, setSidebar] = useState(false);
   const [loginopen, setloginopen] = useState(false);

   const showSidebar = () => setSidebar(!sidebar)
   const location = useLocation();

   const [navbar, setNavbar] = useState(false);
   const [dropdown, setDropdown] = useState(false);

   // const [maindrop, setmaindrop] = useState(false);


   if (location.pathname != '/') {
      nothome = true;
   }
   function Oncancel() {
      setloginopen(false);
      console.log(loginopen)
   }
   function changebackground() {
      if (window.scrollY >= 500) {
         setNavbar(true);
      }
      else {
         setNavbar(false);
      }
   };

   function Dropdownlist() {
      if (dropdown == true)
         setDropdown(false);
      else
         setDropdown(true);
   };

   window.addEventListener('scroll', changebackground)
   return (
      <div className='Navcontents'>
         <appointcontext>
            <header className={(navbar || nothome) ? 'navbar active' : 'navbar'}>
               <GiIcons.GiHamburgerMenu size='2rem' onClick={showSidebar} className='sidebaricon' size="2.5em" />
               <h1 className='logo'>HEALTHYOPEDIA</h1>
               {props.appwidth > 1100 && <ul className='nav-links'>
                  <Link to='/' className={(navbar || nothome) ? 'mainitems active' : 'mainitems'}>
                     <li className='topnav'>Home</li>
                  </Link>
                  <Link to='/aboutus' className={(navbar || nothome) ? 'mainitems active' : 'mainitems'}>
                     <li className='topnav' >About</li>
                  </Link>
                  <Link to='/contactpage' className={(navbar || nothome) ? 'mainitems active' : 'mainitems'} >
                     <li className='topnav'>Contact</li>
                  </Link>
                  <Link to='/dashboard' className={(navbar || nothome) ? 'mainitems active' : 'mainitems'}>
                     <li className='topnav'>DashBoard</li>
                  </Link>
                  <p className={(navbar || nothome) ? 'mainitems active' : 'mainitems'}>
                     <li className='topnav' onClick={() => setloginopen(true)}>Login</li>
                     <LoginPage loginopen={loginopen} onClose={Oncancel} />
                  </p>
               </ul>}
            </header>
            <div className={sidebar ? 'sidenav active' : 'sidenav'}>
               <AiIcons.AiOutlineClose onClick={showSidebar} className='icon' color="black" />
               <ul>
                  <li>
                     <div className='menu-items'>
                        <h2 className='sidebarheadings' onClick={Dropdownlist}>Online-services</h2>
                     </div>
                     <div className='drop'>
                        {dropdown && (
                           <ul className='activesubmenu'>
                              <li>
                                 <Onlineappoint showSideBar={showSidebar} />
                              </li>

                              <li>
                                 <div className='menu-items' onClick={()=>{
                                     showSidebar()
                                     history.push('/health_list')
                                 }
                                }>
                                    <h2 className='sidebarheadings1'> Health Centres </h2>
                                 </div>
                              </li>
                              {/* <li onClick={dropdown}>
                                 <Link to='/' className='online-consent2' onClick={showSidebar}>
                                    Aboutus Content
                                 </Link> </li>*/}
                           </ul>
                     )
                        }
                  </div>
               </li>
               <li>
                  <Link to='./shoppage' className='menu-items'>
                     <h2 className='sidebarheadings' onClick={showSidebar}>Products</h2>
                  </Link>
               </li>
               <li>
                  <Link to='./blogpage' className='menu-items' onClick={showSidebar}>
                     <h2 className='sidebarheadings'> Blog </h2>
                  </Link>
               </li>

               {props.appwidth < 1100 && <div><li>
                  <Link to='/' className='mainitems active' onClick={showSidebar}>
                     <h2 className='mobileviewsidebarheadings'>Home</h2>
                  </Link>
               </li>
                  <li>
                     <Link to='/aboutus' className='mainitems active' onClick={showSidebar}>
                        <h2 className='mobileviewsidebarheadings'>About</h2>
                     </Link>
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
                     <p className='mainitems active' >
                        <h2 className='mobileviewsidebarlogin' onClick={() => setloginopen(true)}>Login</h2>
                        <LoginPage loginopen={loginopen} onClose={Oncancel} />
                     </p>
                  </li>
             </div>}
            </ul>
      </div>
         </appointcontext >
      </div >
   );
}
export default Navbar;
