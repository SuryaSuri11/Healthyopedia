import classes from './products.module.css';
import {useState} from 'react';
import styles from './products.module.css';

function ProductPages(props)
{
  const [backwardButton,setBackwardButton]=useState(false);
  
  function BackwardButton()
  {
    backwardButton==false ?setBackwardButton(true):setBackwardButton(false)
  }
  var pgs=[];
  for(let i=1;i<=Math.ceil(6/9);i++)
  {
    pgs.push(i);
  }

  return(
    <div className={classes.pgs}>
      {backwardButton && props.curpage!=1 && <button className={classes.btn} onClick={()=>{props.setCurrentPage(props.curpage-1)}}>{"<"}</button>}
      {
        pgs.map((no)=>{
          return <button value={no} className={classes.btn} id={styles[props.curpage==no?"curpage":no.toString()]} onClick={()=>{props.setCurrentPage(no)}}>{no}</button>
        })
      }
      <button className={classes.btn} onClick={()=>{BackwardButton();props.setCurrentPage(props.curpage+1)}}>{">"}</button>
    </div>
  )
  
}

export default ProductPages;