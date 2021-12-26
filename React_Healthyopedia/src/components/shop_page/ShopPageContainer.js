import { useState } from 'react';
import classes from './shoppagecontainer.module.css';
import ProductMenu from './ProductsMenu';
// import FilterByRating from './FilterByRating';
// import RangeSlider from './RangeSlider';
// import ProductCategory from './ProductCategory';
// import SelectCurrency from './SelectCurrency';
// import RecentlyViewedProducts from './RecentlyViewedProducts';
import prod_info from './ProductInfo';


function ShopPageContainer() {

  //product
  const [currentpage,setCurrentPage]=useState(1);
  
  function CurrentPage(curpage)
  {
    setCurrentPage(curpage);
  }

  var last_item=currentpage*9;
  var first_item=last_item-9;
  var prod_items=prod_info;
  var product_info=prod_items.slice(first_item,last_item);
  return (
  <div className={classes.wrapper}>
    <div className={classes.product}>
      <ProductMenu products={product_info} setCurrentPage={CurrentPage} curpage={currentpage}/>
    </div>
    <div className={classes.filter}>
      {/* <h2>Products Filter</h2>
      <RangeSlider />
      <FilterByRating />
      <input type='search' placeholder='Search products...' className={classes.search} />
      <ProductCategory />
      <SelectCurrency />
      <RecentlyViewedProducts /> */}
      hi
    </div>
  </div>
  );
}

export default ShopPageContainer;