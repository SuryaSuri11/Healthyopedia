import classes from './products.module.css';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';

function ProductHeader()
{
  const filterctx=useContext(ProductFilterContext);

  return (
  <div className={classes.header}>
    <h2>Shop</h2>

    {/* <p>Showing all {filterctx.products[filterctx.products.length-1].length} results</p> */}
    <div className={classes.sortdropdown}>
    <select id="sortingdropdown">
    <option id="defaultsort" value="1">Default sorting</option>
    {/* <option id="lowtohighsort" value="2">Sort by price:low to high</option>
    <option id="hightolowsort" value="3">Sort by price:high to low</option>
    <option id="alphabetsort" value="4">Sort by letter (A-Z)</option> */}
    </select>
    </div>
  </div>
  );
}

export default ProductHeader;