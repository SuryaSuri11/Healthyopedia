import classes from './products.module.css'

function ProductHeader()
{
  return (
  <div className={classes.header}>
    <h2>Shop</h2>

    {/* <p>Showing all {filterctx.products[filterctx.products.length-1].length} results</p> */}
    <div className={classes.sortdropdown}>
    <select id="sortingdropdown">
    <option id="defaultsort" value="1">Default sorting</option>
    {/* <option id="popularitysort" value="2">Sort by popularity</option>
    <option id="ratingsort" value="3">Sort by average rating</option>
    <option id="latestsort" value="4">Sort by latest</option> */}
    <option id="lowtohighsort" value="2">Sort by price:low to high</option>
    <option id="hightolowsort" value="3">Sort by price:high to low</option>
    </select>
    </div>
  </div>
  );
}

export default ProductHeader;