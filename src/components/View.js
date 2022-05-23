import React from 'react'
import Header from './Header'

const View = () => {
var viewlist=[{"route":"Pathanamthitta-Chengannur","BusName":"Dakshina","RegisterNumber":"JH4624","Owner":"Derrick","ContactNumber":"7894561230"},
{"route":"Adoor-Chengannur","BusName":"Reyan","RegisterNumber":"DF48592","Owner":"Sajan","ContactNumber":"8848455815"},
{"route":"Adoor-Kayamkulam","BusName":"Sunil","RegisterNumber":"DE7124","Owner":"Leana","ContactNumber":"6541239807"},
{"route":"Kottarakara-TVM","BusName":"Kashinadan","RegisterNumber":"SN4656","Owner":"Vivan","ContactNumber":"726514830"},
{"route":"Pathanamthitta-Konni","BusName":"Venad","RegisterNumber":"DK36334","Owner":"Samar","ContactNumber":"6587412903"},
{"route":"Adoor-Ernakulam","BusName":"Anil Motors","RegisterNumber":"GK46476","Owner":"Anil","ContactNumber":"7564912388"}]

  return (
    <div>
        <Header/>
        <br></br>
<div className='container'>
    <div className='row'>
<div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
<table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Register Number</th>
      <th scope="col">Owner's Name</th>
      <th scope="col">Contact Number</th>
      
    </tr>
  </thead>
  <tbody>
   {viewlist.map((value,key)=>
   {
       return  <tr>
       <th scope="row">{value.route}</th>
       <td>{value.BusName}</td>
       <td>{value.RegisterNumber}</td>
       <td>{value.Owner}</td>
       <td>{value.ContactNumber}</td>
     </tr>
   })}
   
  </tbody>
</table>

</div>
    </div>

</div>

    </div>
  )
}

export default View