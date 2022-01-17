import { useState,useEffect } from 'react';
import classes from './shoppagecontainer.module.css';
import ProductMenu from './ProductsMenu';
import ProductCategory from './ProductCategory';

import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';

// import FilterByRating from './FilterByRating';
// import RangeSlider from './RangeSlider';
// import SelectCurrency from './SelectCurrency';
// import RecentlyViewedProducts from './RecentlyViewedProducts';


function ShopPageContainer() {

  const filterctx=useContext(ProductFilterContext);

  // const [products,setProducts]=useState([]);

  //1st change
  // useEffect(()=>{
  //   fetch("http://localhost:8000/api/product-list/").then(
  //     response=>response.json()).then(
  //       data=>setProducts(data)
  //    )
  //  },[])

  //product
  const [currentpage,setCurrentPage]=useState(1);
  
  function CurrentPage(curpage)
  {
    setCurrentPage(curpage);
  }

  var last_item=currentpage*9;
  var first_item=last_item-9;
  var prod_items=filterctx.products;
  var product_info=prod_items.slice(first_item,last_item);
  return (
  <div className={classes.wrapper}>
    <div className={classes.product}>
      <ProductMenu products={product_info} len={filterctx.totalProducts} setCurrentPage={CurrentPage} curpage={currentpage}/>
    </div>
    <div className={classes.filter}>
    {/* <input type='search' placeholder='Search products...' className={classes.search} /> */}
      <ProductCategory />
    </div>
  </div>
  );
}

export default ShopPageContainer;