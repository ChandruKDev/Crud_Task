import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeAdd() {
  const [name,setName]= useState('')
  const [age,setAge]= useState('')
  const [phone,setPhone]= useState('')
  const [address,setAddress]= useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
e.preventDefault();
let value =({name,age,phone,address})
await axios.post('http://localhost:2525/example/new',value)
.then((res)=>{
  if(res.data.success){
    console.log(res.data)
alert("Data posted successFully")
navigate('/')
  }
}).catch((err)=>{
  console.log(err)
})
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='card' style={{"marginTop":'35px'}}>
          <div className='card-title'>
            <h3>Add Employee</h3>
            <div className='card-body'>
                <div className='text text-center'>
              <div className='row' style={{"justifyContent":"center"}}>
                  <div className='col-md-8'>
                    <div className='form-group'>
                      <label style={{"float":"left"}}><b>Name :</b></label>
                      <input className='form-control' placeholder='Enter a employee name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                      <label style={{"float":"left"}}><b>Age :</b></label>
                      <input className='form-control'  placeholder='Enter a employee age' value={age} onChange={(e)=>setAge(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                      <label style={{"float":"left"}}><b>Phone</b></label>
                      <input className='form-control'  placeholder='Enter a employee phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                      <label style={{"float":"left"}}><b>Address :</b></label>
                      <input className='form-control'  placeholder='Enter a employee address' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                    </div>
                    <div style={{"marginTop":'15px'}}>
                      <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeAdd