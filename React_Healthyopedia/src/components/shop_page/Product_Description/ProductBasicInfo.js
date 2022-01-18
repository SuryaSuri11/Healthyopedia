import classes from './product_description.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import ProductFilterContext from '../ProductFilterContext';
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development';

function ProductBasicInfo(props) {
  const filterctx = useContext(ProductFilterContext);
  const [quantityVal, setQuantityVal] = useState(1);
  const [itempresent,setItemPresent]=useState({});


  useEffect(()=>{
    {
    axios.get("http://localhost:8000/api/cart-item/"+props.item.title+"/"+filterctx.userLogin.id).then(
      res=>{
        setItemPresent(res.data);
        // console.log(res.data);
      }
    ).catch(err=>{console.log(err)})
    }

  },[filterctx.cartToggledVal])


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
  console.log(itempresent.title)
  console.log(filterctx.userLogin.username)
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
        {itempresent.title!=undefined && <li><button onClick={()=>{filterctx.deleteCartItem(props.item.title)}}>Remove from cart</button></li>}
        {(itempresent.title==undefined || filterctx.userLogin.username==undefined) && <li><button onClick={addtocart}>Add to cart</button></li>}
      </ul>

      {/* <div className={classes.dispcategory}>Category:<span> {props.item.category}</span></div> */}
    </div>
  }

  export default ProductBasicInfo;