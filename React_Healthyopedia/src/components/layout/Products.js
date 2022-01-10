import React,{useState} from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
function Products(){
    const[productsopen,setshowproducts]=useState(false);
    function categoryproducts(){
        if(productsopen==true)
        setshowproducts(false);
        else
        setshowproducts(true);
    }
    const items=[["data:image/jpeg;base64,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","Covid"],
    ["data:image/jpeg;base64,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","Devices"],
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtu-6XPc_jeQUzrSS06bGGMz3ElDT1_z99cA&usqp=CAU","Nutrition and Fitness Products"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/35959bdd15b6322d8cae5a14afee9a80.png?dim=100x0&dpr=1.25&q=100","Personal Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3402b4331a743e2c8f74fcef273e3a15.png?dim=100x0&dpr=1.25&q=100","Ayurvedic Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/529a506395113e9db55bbb513c405b41.png?dim=100x0&dpr=1.25&q=100s","Baby &Mom Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/76013c62758b3831adae523fee11eaca.png?dim=100x0&dpr=1.25&q=100","Skin Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a0dcdae088c73a35b80b8a7eaeb58316.png?dim=100x0&dpr=1.25&q=100","Diabetic Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a58c348b2164366bb548b86aa797ac01.png?dim=100x0&dpr=1.25&q=100","Sexual Wellness"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c512c6dc9221312db35c2174c4db2299.png?dim=100x0&dpr=1.25&q=100","Short Term Ailments"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7a74f126363e3deeac80a246471767f9.png?dim=100x0&dpr=1.25&q=100","Lifestyle Ailments"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/5782d672f83a3333bab6ac3b5c04fa43.png?dim=100x0&dpr=1.25&q=100","Home Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/93805e4d34b334b988c1020e5678033d.png?dim=100x0&dpr=1.25&q=100","Women Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/15609b53381d3b6db6b767834b3e8aab.png?dim=100x0&dpr=1.25&q=100","Health Food And Drinks"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/af2cb6a6ad5038d7a9454cb50cd25961.png?dim=100x0&dpr=1.25&q=100","Ortho Care"],
    ["https://cdn01.pharmeasy.in/dam/discovery/categoryImages/93805e4d34b334b988c1020e5678033d.png?dim=100x0&dpr=1.25&q=100","Pet Care"],
];

  return(
      <div>
              <h2 className='sidebarheadings'onClick={categoryproducts}>
                 Products
              </h2>
          {productsopen && <div className='cards'>
              {items.map((item)=>{
                  return <ProductCard imgsrc={item[0]} title={item[1]}/>
              })}
                     
               </div>}
      </div>
  );
}
export default Products;