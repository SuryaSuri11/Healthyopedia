import React from 'react'
import { useHistory } from 'react-router';
import "./Dashboard.css";
import * as FaIcons from "react-icons/fa"
import Dashboardproduct from './Dashboardproduct';
import {useContext} from 'react';
import ProductFilterContext from '../components/shop_page/ProductFilterContext';

function DashBoard() {
  const filterctx=useContext(ProductFilterContext);
  const history=useHistory();
  return (
    <div className='dashboard-container'>
      <div className='top-contents'>
      <div className='left'>
       <div className='left-side-contents'>
           <img src="https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=" alt="profile-pic" className='profile-icon'/>
           <button className='view-all' className="edit-profile" onClick={()=> history.push('/editprofile')}>
                Edit Profile
           </button>
           <div className='left-card'>
               {/* <p className='profile-details'>Name:</p>
               <p className='profile-details'>Age</p>
               <p className='profile-details'>Sex:</p>
               <p className='profile-details'>E-mail</p>
               <p className='profile-details'>Phone-no:</p> */}
               <p className='profile-details'>UserName: {filterctx.userLogin.username}</p>
               <p className='profile-details'>Email: {filterctx.userLogin.email}</p>
           </div>
           </div>
       </div>
       <div className='right'>
            User Health Repository
       </div>
       </div>
       <div className='product-bought'>
           <h1 className='productshop-title'>Product Section</h1>
           <h1 className='cart'>Products Bought</h1>
           <div className='items'>
           <div className='cart_section_styling'>
            <h2 className='order_heading'>Products</h2>
            <FaIcons.FaShoppingCart size="6em" className="icon_alignment" />
            <p className='empty'>No Products Bought</p>
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
