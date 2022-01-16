import React from 'react'
import {useHistory} from "react-router"
function AppointSucces() {
  const history=useHistory();
  const appoint=[
    {
    title:"Appointment Booked Succesfully",
    img:"https://static.toiimg.com/thumb/msid-83194191,width-800,resizemode-4,imgsize-62648/share.jpg",
    }
  ]
  console.log(appoint.Title)
  return (
    <div>
      {appoint.map((appoints)=>(
      <div>{history.push('/success',{message:appoints.title,images:appoints.img},)}</div>
      ))}
    </div>
  )
}

export default AppointSucces
