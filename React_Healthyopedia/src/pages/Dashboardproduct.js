import React from 'react'
import './Dashboard.css'
import {useState} from "react";
import ReactPaginate from 'react-paginate';
function Dashboardproduct() {

    const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

   const items=[
       {
           sino:"1",
           product:"Lorem Ipsum is simply dummy text",
           price:"₹50",
           catgeory:"Respiratory Care"
       },
       {
        sino:"2",
        product:"Lorem Ipsum is simply dummy text ",
        price:"₹60",
        catgeory:"Cardiac Care"
       },
       {
        sino:"3",
        product:"Lorem Ipsum is simply dummy text",
        price:"₹40",
        catgeory:"Diabetic Care"
       },
       {
        sino:"4",
        product:"Lorem Ipsum is simply dummy text",
        price:"₹50",
        catgeory:"Respiratory Care"
    },
    {
     sino:"5",
     product:"Lorem Ipsum is simply dummy text ",
     price:"₹60",
     catgeory:"Cardiac Care"
    },
    {
     sino:"6",
     product:"Lorem Ipsum is simply dummy",
     price:"₹40",
     catgeory:"Diabetic Care"
    },
    {
        sino:"7",
        product:"Lorem Ipsum is simply ",
        price:"₹50",
        catgeory:"Respiratory Care"
    },
    {
     sino:"8",
     product:"Lorem Ipsum is simply dummy text",
     price:"₹60",
     catgeory:"Cardiac Care"
    },
    {
     sino:"9",
     product:"Lorem Ipsum is simply dummy",
     price:"₹40",
     catgeory:"Respiratory Care"
    },
   ]
   const displayUsers = items.slice(pagesVisited,pagesVisited + usersPerPage)
   .map((item)=>{
     return <tr className='rows'>
         <td className='data' data-label="SI.NO">{item.sino}</td>
         <td className='data' data-label="Product Details">{item.product}</td>
         <td className='data' data-label="Catgeory">{item.catgeory}</td>
         <td className='data' data-label=" Price">{item.price}</td>
     </tr>
 })
 const pageCount =Math.ceil(items.length/usersPerPage)
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
