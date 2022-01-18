import classes from './product_description.module.css'
import {useState} from 'react';

function ProductDescriptionImage(props)
{
  const [curimg,setCurImg]=useState(props.item.img1)

  function changeImage(imgaddress){
    setCurImg(imgaddress)
  }
  return<div className={classes.img_container}>
    <div>
    <img className={classes.productImage} src={"http://localhost:8000"+curimg} alt={props.item.title} />
    </div>
    <div>
    <ul className={classes.prodimagelist}>
        <li><img src={"http://localhost:8000"+props.item.img1} alt={props.title} onClick={()=>{changeImage(props.item.img1)}} className={curimg==props.item.img1?classes.curzoomimg:classes.notcurzoomimg}/></li>
        {props.item.img2!=null && <li><img src={"http://localhost:8000"+props.item.img2} alt={props.title} onClick={()=>{changeImage(props.item.img2)}} className={curimg==props.item.img2?classes.curzoomimg:classes.notcurzoomimg}/></li>}
        {props.item.img3!=null && <li><img src={"http://localhost:8000"+props.item.img3} alt={props.title} onClick={()=>{changeImage(props.item.img3)}} className={curimg==props.item.img3?classes.curzoomimg:classes.notcurzoomimg}/></li>}
        {props.item.img4!=null && <li><img src={"http://localhost:8000"+props.item.img4} alt={props.title} onClick={()=>{changeImage(props.item.img4)}} className={curimg==props.item.img4?classes.curzoomimg:classes.notcurzoomimg}/></li>}
    </ul>
    </div>
  </div>
}

export default ProductDescriptionImage;