import React from 'react'
import './Dashboard.css'
import {useState,useEffect,useContext} from "react";
import ReactPaginate from 'react-paginate';
import ProductFilterContext from '../components/shop_page/ProductFilterContext';

function Dashboardproduct() {
 const filterctx=useContext(ProductFilterContext);
 const [pageNumber, setPageNumber] = useState(0);
 const [cartProducts, setCartProducts] = useState([]);

 const Products=async(title)=>{
    try{
      const response=await fetch('http://localhost:8000/api/product-item/'+title,{
        headers:{'Content-Type':'application/json'},
        credentials:'include'
    });
    const content =await response.json();
    setCartProducts((prevItem)=>{
        return [...prevItem,content]
    })
   }
   catch(err)
  {
    console.log(err)
  }
  }

  useEffect(()=>{
      setCartProducts([]);
      filterctx.cartProdsTitle.map((item)=>{
          Products(item.title)
      })
  },[filterctx.cartProdsTitle])

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

//    const items=[
//        {
//            sino:"1",
//            product:"Lorem Ipsum is simply dummy text",
//            price:"₹50",
//            catgeory:"Respiratory Care"
//        },
//        {
//         sino:"2",
//         product:"Lorem Ipsum is simply dummy text ",
//         price:"₹60",
//         catgeory:"Cardiac Care"
//        },
//        {
//         sino:"3",
//         product:"Lorem Ipsum is simply dummy text",
//         price:"₹40",
//         catgeory:"Diabetic Care"
//        },
//        {
//         sino:"4",
//         product:"Lorem Ipsum is simply dummy text",
//         price:"₹50",
//         catgeory:"Respiratory Care"
//     },
//     {
//      sino:"5",
//      product:"Lorem Ipsum is simply dummy text ",
//      price:"₹60",
//      catgeory:"Cardiac Care"
//     },
//     {
//      sino:"6",
//      product:"Lorem Ipsum is simply dummy",
//      price:"₹40",
//      catgeory:"Diabetic Care"
//     },
//     {
//         sino:"7",
//         product:"Lorem Ipsum is simply ",
//         price:"₹50",
//         catgeory:"Respiratory Care"
//     },
//     {
//      sino:"8",
//      product:"Lorem Ipsum is simply dummy text",
//      price:"₹60",
//      catgeory:"Cardiac Care"
//     },
//     {
//      sino:"9",
//      product:"Lorem Ipsum is simply dummy",
//      price:"₹40",
//      catgeory:"Respiratory Care"
//     },
//    ]
   var i=0;
   const displayUsers = cartProducts.slice(pagesVisited,pagesVisited + usersPerPage)
   .map((item)=>{
       i++;
     return <tr className='rows'>
         <td className='data' data-label="SI.NO">{i}</td>
         <td className='data' data-label="Product Details">{item.title}</td>
         <td className='data' data-label="Category">{item.category}</td>
         <td className='data' data-label="Price">{item.price}</td>
         <td className='data' data-label="Delete"><button className='delete' onClick={()=>{filterctx.deleteCartItem(item.title)}}>Delete</button></td>
     </tr>
 })
 const pageCount =Math.ceil(cartProducts.length/usersPerPage)
 const changePage=({selected}) =>{
      setPageNumber(selected);
 };
    return (
        <div className='table-container'>
            <table className='table'>
                <thead className='head'>
                <tr className='rows'>
                    <th className='headings'>
                        SI.NO
                    </th>
                    <th className='headings'>
                        Product Details
                    </th>
                    <th className='headings'>
                        Catgeory
                    </th>
                    <th className='headings'>
                        Price
                    </th>
                    <th className='headings'>
                        Delete
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {displayUsers}
                </tbody>
            </table>
             <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationbuttons"}
                  previousLinkClassName={"previousbutton"}
                  nextLinkClassName={"nextbutton"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
        </div>
    )
}

export default Dashboardproduct
