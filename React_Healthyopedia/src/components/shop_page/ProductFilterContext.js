import { createContext, useState, useEffect } from 'react';
import { FaSleigh } from 'react-icons/fa';

const ProductFilterContext = createContext({
  products: [],
  totalProducts: 0,
  categoryFilter:()=>{},
  // curCategoryFunc:()=>{},
  curCategory:"",
  shopPageLocation:false
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [curCat,setCurCat] = useState("all");
  const [curCatWithoutRd,setCurCatWithoutRd] = useState("all");
  const [shopPageLoc,setshopPageLoc]=useState(false);

  useEffect(()=>{
    fetch("http://localhost:8000/api/product-list/").then(
      response=>response.json()).then(
        data=>setFilteredProducts(data)
     )
   },[])


   useEffect(()=>{
     if(shopPageLoc==true)
     {
       if(curCatWithoutRd=='RESPIRATORY CARE')
           setCurCat(document.getElementById("respiratory").value);
       else if(curCatWithoutRd=='BONE & JOINT CARE')
       setCurCat(document.getElementById("bone").value);
       else if(curCatWithoutRd=='PAIN RELIEF' )
       setCurCat(document.getElementById("pain").value);
       else if(curCatWithoutRd=='CARDIAC CARE')
       setCurCat(document.getElementById("cardiac").value);
       else if(curCatWithoutRd=='KIDNEY CARE' )
       setCurCat(document.getElementById("kidney").value);
       else if(curCatWithoutRd=='LIVER CARE' )
       setCurCat(document.getElementById("liver").value);
       else if(curCatWithoutRd=='DIABETIC CARE')
       setCurCat(document.getElementById("diabetic").value);
       else if(curCatWithoutRd=="all")
       setCurCat(document.getElementById("all").value);
     }
   },[filteredProducts])

   function categoryFilterHandler(cat)
   {
     if(cat!=="all")
     {
    fetch("http://localhost:8000/api/productdetails-category/"+cat).then(
      response=>response.json()).then(
        data=>setFilteredProducts(data)
     )
    }
      else
      {
        fetch("http://localhost:8000/api/product-list/").then(
          response=>response.json()).then(
            data=>setFilteredProducts(data)
         )
      }
      setCurCatWithoutRd(cat)
   }

   function  shopPageLocationHandler() {
     setshopPageLoc(true)
   }

  //  function curCatHandler(e) {
  //    setCurCat(e.target.value);
  //  }

  const context = {
    products: filteredProducts,
    totalProducts: filteredProducts.length,
    categoryFilter:categoryFilterHandler,
    // curCategoryFunc:curCatHandler,
    curCategory:curCat,
    setshopPageLocation:shopPageLocationHandler
  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;
