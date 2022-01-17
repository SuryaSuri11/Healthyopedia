import classes from './product_description.module.css';
import styles from './product_description.module.css';
import {useState} from 'react';

function ProductBody(props)
{
  const [curdesc,setCurDesc]=useState({composition:true,description:false,faq:false});

  const bodycat={composition:false,description:false,faq:false};
  function CurrentDesc(cat)
  {
    if(cat=='composition')
    {
      setCurDesc((prevDesc)=>{
        return {...bodycat,composition:true}
      })
    }
    else if(cat=='description')
    {
      setCurDesc(()=>{
        return {...bodycat,description:true}
      })
    }
    else if(cat=='faq')
    {
      setCurDesc(()=>{
        return {...bodycat,faq:true}
      })
    }
  }
  return <div className={classes.prodbody}>
    <div className={classes.bodymenu}>
        <div className={classes.composition} id={curdesc.composition ?styles['curinfo']:styles['notcurinfo']} onClick={()=>{CurrentDesc("composition")}}>
          Composition
        </div>
        <div className={classes.description} id={curdesc.description ?styles['curinfo']:styles['notcurinfo']} onClick={()=>{CurrentDesc("description")}}>
          Description
        </div>
        <div className={classes.faq} id={curdesc.faq ?styles['curinfo']:styles['notcurinfo']} onClick={()=>{CurrentDesc("faq")}}>
          FAQ
        </div>
    </div>

    <div className={classes.bodymenudesc}>
      {curdesc.composition && 
     <div className={classes.compositioninfo}>
      <p>{props.item.composition}</p>
      </div>
      }

      {curdesc.description && 
      <div className={classes.descsection}>
      <p>{props.item.description}</p>

      {props.item.uses!="none" && <div className={classes.descsection}>
      <h2>Uses of {props.item.title}</h2>
      <p>{props.item.uses}</p>
      </div>}

      {props.item.benefits!="none" && <div className={classes.descsection}>
      <h2>Benefits of {props.item.title}</h2>
      <p>{props.item.benefits}</p>
      </div>}

      {props.item.sideEffects!="none" && <div className={classes.descsection}>
      <h2>Side Effects </h2>
      <p>{props.item.sideEffects}</p>
      </div>}

      {props.item.safetyAdvice!="none" && <div className={classes.descsection}>
      <h2>Safety Advice</h2>
      <p>{props.item.safetyAdvice}</p>
      </div>}

      {props.item.hwToUse!="none" && <div className={classes.descsection}>
      <h2>How to use</h2>
      <p>{props.item.hwToUse}</p>
      </div>}

      {props.item.works!="none" && <div className={classes.descsection}>
      <h2>How it Works</h2>
      <p>{props.item.works}</p>
      </div>}
      </div>
      }

      {curdesc.faq && <div>

        {props.item.faqquestion1!=null && <div className={classes.faqinfo}>
        <p className={classes.faqquestion}> {props.item.faqquestion1}</p>
        <p>{props.item.faqanswer1}</p>
        </div>}

        {props.item.faqquestion2!=null && <div className={classes.faqinfo}>
        <p className={classes.faqquestion}>{props.item.faqquestion2}</p>
        <p>{props.item.faqanswer2}</p>
        </div>}

        {props.item.faqquestion3!=null && <div className={classes.faqinfo}>
        <p className={classes.faqquestion}>{props.item.faqquestion3}</p>
        <p>{props.item.faqanswer3}</p>
        </div>}

        {props.item.faqquestion4!=null && <div className={classes.faqinfo}>
        <p className={classes.faqquestion}>{props.item.faqquestion4}</p>
        <p>{props.item.faqanswer4}</p>
        </div>}

        {props.item.faqquestion5!=null && <div className={classes.faqinfo}>
        <p className={classes.faqquestion}>{props.item.faqquestion5}</p>
        <p>{props.item.faqanswer5}</p>
        </div>}


        </div>  
      }
    </div>
  </div>
}

export default ProductBody;