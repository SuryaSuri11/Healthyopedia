import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const ProductFilterContext = createContext({
  products: [],
  totalProducts: 0,
  categoryFilter:()=>{},
  // curCategoryFunc:()=>{},
  curCategory:"",
  shopPageLocation:false,
  loggedIn:false,
  setLoggedIn:()=>{},
  userLogin:{},
  setUserLogin:()=>{},
  cartProdsTitle:[],
  cartToggledFunc:()=>{},
  cartToggledVal:false,
  deleteCartItem:()=>{},
  // sortProducts:()=>{},
  addCartItem:()=>{},
  removeCartItem:()=>{},
  cartProducts:{},
  emptyUserCartItems:()=>{}
});

export function ProductFilterContextProvider(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [curCat,setCurCat] = useState("all");
  const [curCatWithoutRd,setCurCatWithoutRd] = useState("all");
  const [shopPageLoc,setshopPageLoc]=useState(false);
  const [userlogin,setUserLogin]=useState(false);

  const [userInfo,setUserInfo]=useState({});
  const [cartItemsTitle,setCartItemsTitle]=useState([]);
  const [cartToggled,setCartToggled]=useState(false);
  // const [itempresent,setItemPresent]=useState({});
  // const [isItempresent,setItemIsPresent]=useState(false);
  const [cartItems,setCartItems]=useState({});

  //logout empty and initial fetch 


  // var iscartItem=async(title)=>{
  //   var res;
  //   try{
  //   res=await axios.get("http://localhost:8000/api/cart-item/"+props.item.title+"/"+userInfo.id)
  //   return res.data;
  //   }
  //   catch(err)
  //   {
  //     console.log(err)
  //   }
  //   }

  // var checkCartHandler=async(title)=>
  // {
  //   const item=await iscartItem(title);
  //   console.log("item "+item)
  //   if(item.title==title)
  //   {
  //     setItemIsPresent(true)
  //   }
  //   else
  //   {
  //     setItemIsPresent(false)
  //   }
  // }

  const getUserCartItems=async(id)=>{
    try{
      const response=await fetch('http://localhost:8000/api/user-cart-list/'+id,{
        headers:{'Content-Type':'application/json'},
        credentials:'include'
    });
    const content =await response.json();
    console.log('user-cart-items ')
    content.map((item)=>{
      var obj={};
      obj[item.title]=true
      setCartItems((prevItem)=>{
        return {...prevItem,...obj}
      })
    })
    console.log(cartItems)
   }
   catch(err)
  {
    console.log(err)
  }
  }

  function emptyUserCartItemsHandler()
  {
    setCartItems({});
  }

  useEffect(()=>{
    getUserCartItems(userInfo.id)
  },[userInfo])

  function addCartItemHandler(title)
  {
    var obj={};
    obj[title]=true
    setCartItems((prevItem)=>{
      return {...prevItem,...obj}
  })
  }

  function removeCartItemHandler(title)
  {
    var obj={};
    obj[title]=false
    setCartItems((prevItem)=>{
      return {...prevItem,...obj}
    })
  }

 const getCartItems=async(id)=>{
  try{
    const response=await fetch('http://localhost:8000/api/user-cart/'+id,{
      headers:{'Content-Type':'application/json'},
      credentials:'include'
  });
  const content =await response.json();
  // console.log(content)
  setCartItemsTitle(content)
 }
 catch(err)
{
  console.log(err)
}
}
  
  const loginInfo=async()=>{
    try{
    const response=await fetch('http://localhost:8000/api/user',{
      headers:{'Content-Type':'application/json'},
      credentials:'include'
  });
  const content =await response.json();
  // console.log(content)
  setUserInfo({
    id:content.id,
    username:content.username,
    email:content.email
  })
  getCartItems(content.id)
}
catch(err)
{
  console.log(err)
}
}

  useEffect(()=>{
    fetch("http://localhost:8000/api/product-list/").then(
      response=>response.json()).then(
        data=>setFilteredProducts(data)
     )
   },[])


   useEffect(()=>{
     loginInfo()
   },[userlogin,cartToggled])



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


  function userLoginHandler(val) {
    setUserLogin(val);
  }

  function userInfoHandler() {
    setUserInfo({});
  }

  function toggleCartHandler(){
    cartToggled ?setCartToggled(false):setCartToggled(true)
  }

  function deleteCartItemHandler(title)
  {
    console.log(title)
    axios.delete('http://localhost:8000/api/cart-delete/'+title,{withCredentials:true}).then(res=>{
      // console.log(response)
      toggleCartHandler()
    }).catch(
      err=>console.log(err)
    )
  }


 

  // function deleteCartHandler(title) {
  //   try{
  //     const response=await fetch('http://localhost:8000/api/cart-delete/'+title,{
  //       headers:{'Content-Type':'application/json'},
  //       credentials:'include'
  //   });
  //   const content =await response.json();
  //   // console.log(content)
  //   setUserInfo({
  //     id:content.id,
  //     username:content.username,
  //     email:content.email
  //   })
  //   getCartItems(content.id)
  // }
  // catch(err)
  // {
  //   console.log(err)
  // }
  // }


  const context = {
    products: filteredProducts,
    totalProducts: filteredProducts.length,
    categoryFilter:categoryFilterHandler,
    // curCategoryFunc:curCatHandler,
    curCategory:curCat,
    setshopPageLocation:shopPageLocationHandler,
    loggedIn:userlogin,
    setLoggedIn:userLoginHandler,
    userLogin:userInfo,
    setUserLogin:userInfoHandler,
    cartProdsTitle:cartItemsTitle,
    cartToggledFunc:toggleCartHandler,
    deleteCartItem:deleteCartItemHandler,
    cartToggledVal:cartToggled,
    // sortProducts:sortProductsHandler,
    addCartItem:addCartItemHandler,
    removeCartItem:removeCartItemHandler,
    cartProducts:cartItems,
    emptyUserCartItems:emptyUserCartItemsHandler

  };

  return (
    <ProductFilterContext.Provider value={context}>
      {props.children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;
