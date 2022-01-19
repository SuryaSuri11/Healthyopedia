import classes from './products.module.css';
import ProductImage from './ProductImage';
import { useHistory } from 'react-router';
// import {useContext} from 'react';
// import ProductFilterContext from './ProductFilterContext';

function ProductItem(props){
  // const filterctx=useContext(ProductFilterContext);
  const history=useHistory();
  return props.products.map((item)=>{
    return (
      <div className={classes.item}>
        <ProductImage item={item}/>
        <div className={classes.link} onClick={()=>{history.push('/product_description',{descProduct:item})}}>
         <h5>{item.category}</h5>
         <h3>{item.title}</h3>
         <p>{"₹ "+item.price}</p>
         </div>
     </div>
   
    );
  });

}


export default ProductItem;