import './Cards.css';

function Cards(props){
  return(
         <div className='cards'>
              <p className='onlinetitle'>{props.title}</p>
              <img src={props.imgsrc} alt='category' className="onlineimg"/>
              <p className='onlinedesc'>{props.desc}</p>
              <p className='diseases'>{props.ex}</p>
         </div>
  );
}
export default Cards;