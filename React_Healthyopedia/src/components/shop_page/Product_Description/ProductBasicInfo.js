import classes from './product_description.module.css';
import { useState } from 'react';

function ProductBasicInfo(props) {
  const [quantityVal, setQuantityVal] = useState(1);


  function QuantityValInc() {
    var cnt = quantityVal + 1;
    setQuantityVal(cnt);
  }
  function QuantityValDec() {
    var cnt = quantityVal - 1;
    setQuantityVal(cnt);
  }
  // function FlagDropdownOut()
  // {
  //   setFlagDropdown(false) 
  // }
  return <div className={classes.basicinfo}>
    <h1>{props.item.title}</h1>
    <p>This Medicine Requires Valid Prescription</p>
    <p>{props.item.category}</p>
    <p className={classes.price}>₹ {props.item.price} (Inclusive of all Taxes)</p>
    <p className={classes.tabletcnt}>{props.item.quantity}</p>
    <ul className={classes.firstquantity}>
      <li><button >-</button></li>
      <li><div>{quantityVal}</div></li>
      <li><button onClick={QuantityValInc}>+</button></li>
    </ul> 
    <ul className={classes.secondquantity}>
      <li><button>Buy now</button></li>
      <li><button>Add to cart</button></li>
    </ul>

    {/* <div className={classes.dispcategory}>Category:<span> {props.item.category}</span></div> */}
  </div>
}

export default ProductBasicInfo;