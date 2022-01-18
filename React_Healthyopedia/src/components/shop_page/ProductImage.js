
import {useState} from 'react';

function ProductImage(props)
{
  const [hover,setHover]=useState(false);

  function Hovered(hoverimg)
  {
    if(hoverimg!=null)
         setHover(true);
  }

  return <span>
 {!hover && <img  src={"http://localhost:8000"+props.item.img1} alt={props.item.title} onMouseOver={()=>{Hovered(props.item.img2==null ?null:"http://localhost:8000"+props.item.img2)}}/>}
  {hover && <img src={props.item.img2==null ?null:"http://localhost:8000"+props.item.img2} alt={props.item.title} onMouseOut={()=>{setHover(false)}}/> }
  </span>
}

export default ProductImage;