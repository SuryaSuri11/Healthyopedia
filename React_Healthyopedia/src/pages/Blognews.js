import './Blognews.css';
function Blognews(props){
return(
     <div className="blog-container">
         <div className="blog-card">
                <img src={props.img} alt="img" className='blog-images'/>
                <div className='blog-text'>
                <h1 className="headlines">
                    {props.headlines}
                </h1>
                <p className="headlinesdescription">
                    {props.description}
                </p>
                <button className="readmore">
                    <a to="">
                    Read More
                    </a>
                </button>
                </div>
         </div>
     </div>
)
}
export default Blognews;