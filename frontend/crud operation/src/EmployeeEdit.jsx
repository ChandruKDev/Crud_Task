import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'

function EmployeeEdit() {
    const {id} = useParams()
    const [name,setName]= useState('')
    const [age,setAge]= useState('')
    const [phone,setPhone]= useState('')
    const [address,setAddress]= useState('')
    const navigate = useNavigate()
  
    const handleSubmit = async(e)=>{
  e.preventDefault();
  let value =({name,age,phone,address})
  await axios.put('http://localhost:2525/example/update/'+id,value)
  .then((res)=>{
    if(res.data.success){
      if(window.confirm('Are you sure want to update Data')){
        alert("Data updated successFully")
        navigate('/')
      }
    }
  }).catch((err)=>{
    console.log(err)
  })
    }
    useEffect(()=>{
      axios.get('http://localhost:2525/example/'+id)
      .then((res)=>{
          if(res.data.success){
            const data = res.data.data
            setName(data.name)
            setAge(data.age)
            setPhone(data.phone)
            setAddress(data.address)
          }
      }).catch((err)=>{
          console.log(err)
      })
  },[])
  return (
    <div className='container'>
    <div className='row'>
      <div className='card' style={{"marginTop":'35px'}}>
        <div className='card-title'>
          <h3>Edit Employee</h3>
          <div className='card-body'>
              <div className='text text-center'>
            <div className='row' style={{"justifyContent":"center"}}>
                <div className='col-md-8'>
                  <div className='form-group'>
                    <label style={{"float":"left"}}><b>Name :</b></label>
                    <input className='form-control' placeholder='Enter a employee name' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                  </div>
                  <div className='form-group'>
                    <label style={{"float":"left"}}><b>Age :</b></label>
                    <input className='form-control'  placeholder='Enter a employee age' name='age' value={age} onChange={(e)=>setAge(e.target.value)}></input>
                  </div>
                  <div className='form-group'>
                    <label style={{"float":"left"}}><b>Phone</b></label>
                    <input className='form-control'  placeholder='Enter a employee phone' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                  </div>
                  <div className='form-group'>
                    <label style={{"float":"left"}}><b>Address :</b></label>
                    <input className='form-control'  placeholder='Enter a employee address' name='address' value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                  </div>
                  <div style={{"marginTop":'15px'}}>
                    <button className='btn btn-success' onClick={handleSubmit}>Edit</button>
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

export default EmployeeEdit