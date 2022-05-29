import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
var [viewlist,setView]=useState([])
var [load,setLoad]=useState(true)
axios.get("http://localhost:8000/api/viewbus").then((response)=>{
console.log(response.data)
setView(response.data)
setLoad(false)
})

const deleteBus=(id)=>{
  const readId={"_id":id}
  axios.post("http://localhost:8000/api/delete",readId).then((response)=>{
console.log(response.data)
if(response.data.status=="success")
{
alert("data deleted successfully")
}          
else
{
alert("deletion failed")
}
})

}
  return (
    <div>
        <Header/>
        <br></br>
<div className='container'>
    <div className='row'>
<div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
{load ?<div class="d-flex justify-content-center">
<div class="spinner-border  text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div> :
<table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Register Number</th>
      <th scope="col">Owner's Name</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
   {viewlist.map((value,key)=>
   {
       return  <tr>
       <th scope="row">{value.route}</th>
       <td>{value.busname}</td>
       <td>{value.register}</td>
       <td>{value.owner}</td>
       <td>{value.phone}</td>
       <td><button onClick={()=>{deleteBus(value._id)}} className="btn btn-danger">DELETE</button></td>
     </tr>
   })}
   
  </tbody>
</table>
}
</div>
    </div>

</div>

    </div>
  )
}

export default View