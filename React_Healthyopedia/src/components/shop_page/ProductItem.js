import classes from './products.module.css';
import ProductImage from './ProductImage';
import { useHistory } from 'react-router';

function ProductItem(props){
  const history=useHistory();
  return props.products.map((item)=>{
    return (
      <div className={classes.item}>
        <ProductImage item={item}/>
        <div className={classes.link} onClick={()=>{history.push('/product_description',{descProduct:item})}}>
         <h5>{item.category}</h5>
         <h3>{item.title}</h3>
         <p>20.0</p>
         </div>
    </div>
   
    );
  });

}


export default ProductItem;