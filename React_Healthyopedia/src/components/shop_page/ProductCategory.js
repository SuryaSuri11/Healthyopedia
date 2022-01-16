import classes from './products.module.css';
import {useContext} from 'react';
import ProductFilterContext from './ProductFilterContext';

function ProductCategory() {
  const filterctx=useContext(ProductFilterContext);

  return (
    <div className={classes.product_category}>
      <h2>Product categories</h2>
      <p>
        <input type="radio" id="all" name="category" value="all" onClick={()=>{filterctx.categoryFilter("all")}}  checked={filterctx.curCategory==="all"}/>
        <label for="all">All</label>
      </p>
      <p>
        <input type="radio" id="respiratory" name="category" value="respiratory" onClick={()=>{filterctx.categoryFilter("RESPIRATORY CARE")}}  checked={filterctx.curCategory==="respiratory"}/>
        <label for="respiratory">Respiratory Care</label>
      </p>
      <p>
        <input type="radio" id="bone" name="category" value="bone" onClick={()=>{filterctx.categoryFilter("BONE & JOINT CARE")}} checked={filterctx.curCategory==="bone"}/>
        <label for="bone">Bone and Joint care</label>
      </p>
      <p>
        <input type="radio" id="pain" name="category" value="pain"onClick={()=>{filterctx.categoryFilter("PAIN RELIEF")}}  checked={filterctx.curCategory==="pain"}/>
        <label for="pain">Pain Relief</label>
      </p>
      <p>
        <input type="radio" id="cardiac" name="category" value="cardiac" onClick={()=>{filterctx.categoryFilter("CARDIAC CARE")}}  checked={filterctx.curCategory==="cardiac"}/>
        <label for="cardiac">Cardiac Care</label>
      </p>
      <p>
        <input type="radio" id="kidney" name="category" value="kidney"onClick={()=>{filterctx.categoryFilter("KIDNEY CARE")}}  checked={filterctx.curCategory==="kidney"}/>
        <label for="kidney">Kidney care</label>
      </p>
      <p>
        <input type="radio" id="liver" name="category" value="liver"onClick={()=>{filterctx.categoryFilter("LIVER CARE")}}  checked={filterctx.curCategory==="liver"}/>
        <label for="liver">Liver care</label>
      </p>
      <p>
        <input type="radio" id="diabetic" name="category" value="diabetic" onClick={()=>{filterctx.categoryFilter("DIABETIC CARE")}} checked={filterctx.curCategory==="diabetic"}/>
        <label for="diabetic">Diabetic care</label>
      </p>
    </div>
  );
}

export default ProductCategory;