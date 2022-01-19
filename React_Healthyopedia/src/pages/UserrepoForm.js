import React from 'react'
import {useState} from "react"
import { useHistory } from 'react-router-dom';
import './Dashboard.css';
import {useContext} from 'react';
import ProductFilterContext from '../components/shop_page/ProductFilterContext';
function Userrepo() {
  let history=useHistory();
  const filterctx=useContext(ProductFilterContext);
  const[date,setdate]=useState("")
  const[title,settitle]=useState("")
  const[image,setimage]=useState()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadData =new FormData();
    uploadData.append('date',date)
    uploadData.append('title',title)
    uploadData.append('image',image)
    uploadData.append('user',filterctx.userLogin.id)
    fetch('http://localhost:8000/api/repo-create/',{
        method:'POST',
        body:uploadData
        // date:formValues.date,
        // title:formValues.title,
        // image:formValues.img,
        // user:filterctx.userLogin.email
    }).then(res =>console.log(res))
    setdate("")
    settitle("")
    setimage([])
    }
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.date) {
  //     errors.date = "Date is required!";
  //   }
  //   if (!values.title) {
  //       errors.title = "Title is required!";
  //     }
  //   if (!values.img) {
  //     errors.img = "Image is required!";
  //   }
  //   return errors;
  // };
    return (
        <div className='userrepo-form'>
          <div className='repo-form'>
          <form onSubmit={handleSubmit}>
        <div className="ui form">
          <div className="field">
            <label className='label'>Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(evt)=> setdate(evt.target.value)}
              className='contact-input'
              placeholder='Date'
              required
            />
          </div>
          {/* <p className='errors'>{formErrors.date}</p> */}
          <div className="field">
            <label  className='label'>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(evt)=> settitle(evt.target.value)}
              className='contact-input'
              placeholder='title'
              required
            />
          </div>
          {/* <p className='errors'>{formErrors.title}</p> */}
          <div className="field">
            <label  className='label'>Image</label>
            <input
              type="file"
              name="img"
              id="img"
              onChange={(evt)=>setimage(evt.target.files[0])}
              className='contact-input'
              placeholder='img'
              required
            />
          </div>
          {/* <p className='errors'>{formValues.img}</p> */}
          <button className="contact-submit">Submit</button>
        </div>
      </form>
        </div>
        </div>
    )
}

export default Userrepo
