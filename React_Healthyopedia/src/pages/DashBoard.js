import React from 'react'
import { useHistory } from 'react-router';
import "./Dashboard.css";
import * as FaIcons from "react-icons/fa"
import Dashboardproduct from './Dashboardproduct';
import Userrepository from './UserRepository';
function DashBoard() {
  const history=useHistory();
  return (
    <div className='dashboard-container'>
      <div className='top-contents'>
      <div className='left'>
       <div className='left-side-contents'>
           <img src="https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=" alt="profile-pic" className='profile-icon'/>
           <div className='left-card'>
               <p className='profile-details'>Name:</p>
               <p className='profile-details'>Age</p>
               <p className='profile-details'>Sex:</p>
               <p className='profile-details'>E-mail</p>
               <p className='profile-details'>Phone-no:</p>
           </div>
           </div>
       </div>
       <div className='right'>
         <h1 className='repo'>User Repository</h1>
         <button className='view-all' onClick={()=> history.push('/userrepo')}>
                     Add Data
          </button>
            <Userrepository/>
       </div>
       </div>
       <div className='product-bought'>
           <h1 className='productshop-title'>Product Section</h1>
           <h1 className='cart'>Products Bought</h1>
           <div className='items'>
           <div className='cart_section_styling'>
            <h2 className='order_heading'>Your Cart</h2>
            <FaIcons.FaShoppingCart size="5.5em" className="icon_alignment" />
            <p className='empty'>Products Bought Is Empty</p>
            <FaIcons.FaSadTear size="4em" className="icon_alignment1"/>
            </div>    
           </div>
       </div>
       <div>
         <h1 className='productshop-details'>Products In Cart</h1>
         <Dashboardproduct/>
       </div>
    </div>
  )
}

export default DashBoard
