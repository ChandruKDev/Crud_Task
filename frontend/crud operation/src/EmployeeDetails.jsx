import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeDetails() {

const [data,setData] = useState('')
    const {id} = useParams();
    const navigate = useNavigate()
    console.log(id);
    useEffect(()=>{
        axios.get('http://localhost:2525/example/'+id)
        .then((res)=>{
            if(res.data.success){
setData(res.data.data)
            }
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handleGoBack = ()=>{
navigate('/')
    }
  return (
    <div className='container'>
        <div className='card' style={{"marginTop":"35px"}}>
            <div className='text text-center'>
            <div className='card-title'>
                <h3>Employee Detail</h3>
            </div>
            <div className='card-body'>
                <h5>Name : {data.name}</h5>
                <h5>Age : {data.age}</h5>
                <h5>Phone : {data.phone}</h5>
                <h5>Address : {data.address}</h5>
                <button className='btn btn-warning' onClick={handleGoBack}>Go Back</button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default EmployeeDetails