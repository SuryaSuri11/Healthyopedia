import classes from './product_description.module.css'
// import styles from './product_description.module.css'
import ProdDescImage from './ProdDescImage';
import ProductBasicInfo from './ProductBasicInfo';
import { useLocation } from 'react-router';
import ProductBody from './ProductBody';
// import {useState} from 'react';
// import {FaRegStar,FaStar} from 'react-icons/fa';
// import RelatedProducts from './RelatedProducts';

function ProductDescription() {
  // const [descinfo,setDescInfo]=useState(true);
  const location = useLocation();


  // function DescInfo()
  // {
  //   setDescInfo(true);
  // }

  // function Review()
  // {
  //   setDescInfo(false);
  // }
  return <div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.header}>
        <ProdDescImage item={location.state.descProduct} />
        <ProductBasicInfo item={location.state.descProduct}/>
      </div>
      <ProductBody item={location.state.descProduct}/>
        {/* <div className={classes.bodymenu}>
        <div className={classes.description} id={descinfo ?styles['curinfo']:styles['notcurinfo']}onClick={DescInfo}>
          Description
        </div>
        <div className={classes.review} id={!descinfo ?styles['curinfo']:styles['notcurinfo']} onClick={Review}>
          Review
        </div>
        </div>
        {descinfo && <div >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident, quas omnis tenetur facilis, ad porro fugiat, repudiandae consequatur recusandae aspernatur? Cum suscipit tenetur nihil cumque id similique voluptatibus libero alias consectetur quae officiis, quia assumenda aperiam, quis praesentium. Fugit corporis ratione, veritatis enim odit amet reiciendis quisquam? Architecto libero, omnis alias officiis quam sed illum. Fugit harum impedit ratione veniam magnam rerum maiores, consequuntur ipsam corrupti consequatur ex labore, voluptatem nesciunt possimus officia asperiores! Debitis id animi sapiente eos minus odio impedit dignissimos rerum, quas vero laudantium sequi iusto modi. Blanditiis eum error praesentium ipsa aperiam eos provident sunt!
          </div>}
      </div>
      <div className={classes.footer}>
        <h2>Related Products</h2> */}
        {/* <div className={classes.related}><RelatedProducts item={location.state.descProduct}/></div> */} 
    </div>
  </div>
}

export default ProductDescription;