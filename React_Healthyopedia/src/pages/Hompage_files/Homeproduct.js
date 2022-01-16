import React from 'react'
import Carousel from "react-elastic-carousel"
import '../HomePage.css';
import Item from './Item';
import {useContext} from 'react';
import ProductFilterContext from '../../components/shop_page/ProductFilterContext';
import { useHistory } from 'react-router';


const breakPoints=[
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4},
];
function Homeproduct(){
  const history=useHistory();
  const filterctx=useContext(ProductFilterContext);
    return (
        <>
        <h1 className='cat-title'>SHOP BY HEALTH CONCERN</h1>
        <div className='slides'>
            <Carousel breakPoints={breakPoints}>
                <Item onClick={()=>{filterctx.categoryFilter("RESPIRATORY CARE");history.push('/shoppage')}}>
                    <img src='https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fab9e4d68-120X.png' className='cat-img'/>

                    <p className='cat-des'>
                       Respiratory Care 
                    </p>
                </Item>
                <Item onClick={()=>{filterctx.categoryFilter("BONE & JOINT CARE");history.push('/shoppage')}}>
                <img src='https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fc084a228-120X.png' className='cat-img'/>
                    <p className='cat-des'>
                    Bone and Joint Pains
                    </p>
                </Item>
                <Item onClick={()=>{filterctx.categoryFilter("PAIN RELIEF");history.push('/shoppage')}}>
                <img src='https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fc235a78b-120X.png' className='cat-img'/>
                    <p className='cat-des'>
                    Pain Relief
                    </p>
                </Item>
                <Item onClick={()=>{filterctx.categoryFilter("CARDIAC CARE");history.push('/shoppage')}}>
                <img src='https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fc44c6981-120X.png' className='cat-img'/>
                    <p className='cat-des'>
                    Cardiac Care
                    </p>
                </Item>
                <Item onClick={()=>{filterctx.categoryFilter("KIDNEY CARE");history.push('/shoppage')}}>
                <img src='https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fe5234c50-120X.png' className='cat-img'/>
                    <p className='cat-des'>
                    Kidney Care
                    </p>
                </Item>
                <Item onClick={()=>{filterctx.categoryFilter("DIABETIC CARE");history.push('/shoppage')}}>
                <img src='https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8ff511094b-120X.png' className='cat-img'/>

                    <p className='cat-des'>
                    Diabetic Care
                    </p>
                </Item>
                <Item onClick={()=>{filterctx.categoryFilter("LIVER CARE");history.push('/shoppage')}}>
                <img src='https://zeelabpharmacy.com/public/uploads/healthconcern/EMCEE5eb8fea163257-120X.png' className='cat-img'/>
                    <p className='cat-des'>
                    Liver Care
                    </p>
                </Item>
               </Carousel>
         </div>
         <div className='all-news'>
                    <button className='view-all' onClick={()=> history.push('/shoppage')}>
                     View all Products
                     </button>
                </div>
        </>
    );
}

export default Homeproduct;
