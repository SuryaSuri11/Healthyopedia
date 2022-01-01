import './OnlineCard.css';

function OnlineCard(props){
  return(
       <div className='online-container'>
         <div className='online-cards'>
             <h2>
                 {props.title}
             </h2>
             <img src="{props.img}"/>
             <p>
               {props.description}
             </p>
         </div>
       </div>
  );
}
export default OnlineCard;