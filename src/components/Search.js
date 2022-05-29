import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [route,setRoute]=useState("")
    const [data,setData]=useState([{"busname":"","register":"","owner":"","phone":""}])
   
    const searchBus=(()=>{
        const readValues={"route":route}
        axios.post("http://localhost:8000/api/searchbus",readValues).then((response)=>{
           console.log(response.data)
           setData(response.data.data)
        })
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

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Bus Route</label>
        <input onChange={(a)=>{setRoute(a.target.value)}} type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button onClick={searchBus} className="btn btn-primary">SEARCH</button>
    </div>
</div>

{data.map((value,key)=>{
return <div className='row g-3'>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Bus Name</label>
        <input value={value.busname}  type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Register Number</label>
        <input value={value.register}  type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Owner Name</label>
        <input value={value.owner}  type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label for="" className="form-label">Contact Number</label>
        <input value={value.phone}  type="text" className="form-control"/>
        
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       <button onClick={()=>{deleteBus(value._id)}}  className='btn btn-danger'>DELETE</button>
        
    </div>
</div>

})}

        </div>
    </div>
</div>
    </div>
  )
}

export default Search