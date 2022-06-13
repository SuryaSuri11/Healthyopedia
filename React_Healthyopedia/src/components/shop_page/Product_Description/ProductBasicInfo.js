import classes from './product_description.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import ProductFilterContext from '../ProductFilterContext';
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development';

function ProductBasicInfo(props) {
  const filterctx = useContext(ProductFilterContext);
  const [quantityVal, setQuantityVal] = useState(1);


  function addtocart() {
    axios({
      method: "POST",
      url:"http://localhost:8000/api/cart-create/",
      data: {
        'title': props.item.title,
        'user': filterctx.userLogin.id
      }
    }).then(response => {
      // console.log(response)
      filterctx.cartToggledFunc();
      filterctx.addCartItem(props.item.title)
    }).catch(function (error) {
      console.log(error);
    })}

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
console.log(filterctx.cartProducts)
  return <div className={classes.basicinfo}>
      <h1>{props.item.title}</h1>
      <p>This Medicine Requires Valid Prescription</p>
      <p>{props.item.category}</p>
      <p className={classes.price}>₹ {props.item.price} (Inclusive of all Taxes)</p>
      <p className={classes.tabletcnt}>{props.item.quantity}</p>
      <ul className={classes.firstquantity}>
        <li><button onClick={QuantityValDec}>-</button></li>
        <li><div>{quantityVal}</div></li>
        <li><button onClick={QuantityValInc}>+</button></li>
      </ul>
      <ul className={classes.secondquantity}>
        <li><button>Buy now</button></li>
        {filterctx.cartProducts[props.item.title] && filterctx.userLogin.username!=undefined && <li><button className={classes.removecartbtn} onClick={()=>{filterctx.deleteCartItem(props.item.title);filterctx.removeCartItem(props.item.title)}}>Remove from cart</button></li>}
        {!filterctx.cartProducts[props.item.title] && filterctx.userLogin.username!=undefined && <li><button onClick={addtocart}>Add to cart</button></li>}
      </ul>

      {/* <div className={classes.dispcategory}>Category:<span> {props.item.category}</span></div> */}
    </div>
  }

  export default ProductBasicInfo;