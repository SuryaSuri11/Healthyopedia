import Blognews from "./Blognews";
import {useState,useEffect} from 'react';
import './Blognews.css';

function BlogPage(props){
    const [news,setNews]=useState([{status:null,totalResults:null,articles:null}]);
    // function NewsSetter(data)
    // {
    //     return setNews((prevNews)=>{
    //         return data;
    //     })
    // }
    // const NewsData=async(data)=>{
    //     var data=await NewsSetter(data);
    //     return data;
    // }

    useEffect(()=>{
     fetch("http://localhost:8000/api/health-news/").then(
       response=>response.json()).then(
         data=>setNews(data)
        // data=>console.log(data)
      )
    },[])

  
    // console.log(news['articles'])
    
    
    return(
        <div>
        {news['articles']!=null && news['articles'].map((article)=>{
            return <Blognews img={article['urlToImage']} headlines={article['title']} description={article['description']} url={article['url']}/>
        })}
        </div>
    );
    }
    export default BlogPage;