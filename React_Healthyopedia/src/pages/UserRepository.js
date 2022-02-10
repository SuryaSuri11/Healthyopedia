import React from 'react'
import './Dashboard.css'
import {useState,useEffect} from "react";
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function Userrepository() {

  const [pageNumber, setPageNumber] = useState(0);
  const [repodata,setrepodata]=useState([]);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  
  function deleterepoitem(title)
  {
    // console.log(id)
    axios.delete('http://localhost:8000/api/repo-delete/'+title,{withCredentials:true}).then(res=>{
      console.log(res)
    }).catch(
      err=>console.log(err));
      repositorylist();
  }

  function repositorylist(){
    fetch("http://localhost:8000/api/repo-list/").then(
        response => response.json()).then(
          data => setrepodata(data)
          // data=>console.log(data)
        )
     }
  useEffect(() => {
    repositorylist();
  }, [])
   var i=0; 
   const displayUsers = repodata.slice(pagesVisited,pagesVisited + usersPerPage)
   .map((repo)=>{
       i++;
     return <tr className='rows'>
         <td className='data' data-label="SI.NO">{i}</td>
         <td className='data' data-label="Date">{repo.date}</td>
         <td className='data' data-label="Title">{repo.title}</td>
         <td className='data' data-label="Img"><a className="underline"href={"http://localhost:8000"+repo.image} target='_blank'><button className='repo-view'>View</button></a></td>
         <td className='data' data-label="Delete"><button className='repo-all' onClick={()=>deleterepoitem(repo.title)}>Delete</button></td>
     </tr>
 })
 const pageCount =Math.ceil(repodata.length/usersPerPage)
 const changePage=({selected}) =>{
      setPageNumber(selected);
 };
    return (
        <div className='table-container1'>
            <table className='table1'>
                <thead className='head1'>
                <tr className='rows1'>
                    <th className='headings1'>
                        SI.NO
                    </th>
                    <th className='headings1'>
                        Date
                    </th>
                    <th className='headings1'>
                        Title
                    </th>
                    <th className='headings1'>
                       View
                    </th>
                    <th className='headings1'>
                      Delete
                    </th>
                    </tr>
                </thead>
                <tbody className='body1'>
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

export default Userrepository;
