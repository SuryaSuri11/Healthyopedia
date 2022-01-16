import './Blognews.css';
function Blognews(props){
    console.log(props.description)
return( 
    <div className="blog-container">
    <div className="blog-card">
    { props.img!=null && <img src={props.img} alt="img" className='blog-images'/>}
          <div className='blog-text'>
          <h1 className="headlines">
              {props.headlines}
          </h1>
          <p className="headlinesdescription">
              {props.description}
          </p>
          <button className="readmore">
              <a href={props.url}>
              Read More
              </a>
          </button>
          </div>
   </div>
</div>
)
}
export default Blognews;