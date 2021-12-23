import './ProductCard.css';

function ProductCard(props){
  return(
         <div className='card-categoery'>
              <img src={props.imgsrc} alt='category' className="categoeryimg"/>
              <p className='categoerytitle'>{props.title}</p>
         </div>
  );
}
export default ProductCard;