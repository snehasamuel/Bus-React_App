import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Entry = () => {
    var [route,setRoute]=useState("")
    var [busname,setBusName]=useState("")
    var [regno,setRegNo]=useState("")
    var [owner,setOwner]=useState("")
    var [contact,setContact]=useState("")


    const RegValues=(()=>{
const data={"route":route,"busname":busname,"register":regno,"owner":owner,"phone":contact}


axios.post("http://localhost:8000/api/addbus",data).then((response)=>{
console.log(response.data)
if(response.data.status==="success")
{
    alert("data inserted successfully")
}
else{
    alert("data insertion failed!!")
}
})
    })
  return (
    <div>
        <Header/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(a)=>{setRoute(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Bus Name</label>
                    <input onChange={(a)=>{setBusName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Register Number</label>
                    <input onChange={(a)=>{setRegNo(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Owner's Name</label>
                    <input onChange={(a)=>{setOwner(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(a)=>{setContact(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={RegValues} className="btn btn-primary">REGISTER</button>
                </div>
            </div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Entry