import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function EmployeeList() {
    const [data, setData] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:2525/example/').then((res) => {
            if (res.data) {
                // console.log(res.data.data);
                setData(res.data.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleDetails = ({ _id }) => {
        navigate('employee/details/' + _id)
    }

    const handleEdit = ({ _id }) => {
        navigate('employee/edit/' + _id)
    }

    const handleDelete = async (id, i) => {
        if (window.confirm('Are you sure want to delete')) {
            await axios.delete(`http://localhost:2525/example/delete/${id}`)
                .then((res) => {
                    if (res.data.success) {
                        data.splice(i, 1);
                        setData([...data])
                    }
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <div className='container'>
            <div className='card' style={{ "marginTop": '30px' }}>
                <div className='text text-center'>
                <div className='card-title' style={{ "marginTop": '30px' }}>
                    <h3>Employee List</h3>
                    <Link to='/employee/add' className='btn btn-success'> Add Employee +</Link>
                </div>
                </div>
                <div className='container'>
                    <div className='card-body'>
                        <div className='col-md-12'>
                        <div className='row'>
                        <table className='table table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Age</td>
                                    <td>Phone</td>
                                    <td>Address</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? data.map((d, i) => {
                                    return (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{d.name}</td>
                                            <td>{d.age}</td>
                                            <td>{d.phone}</td>
                                            <td>{d.address}</td>
                                            <td>
                                                <a className='btn btn-warning' style={{ "margin": '5px' }} onClick={() => handleEdit(d)}>Edit</a>
                                                <a className='btn btn-danger' style={{ "margin": '5px' }} onClick={() => handleDelete(d._id, i)}>Remove</a>
                                                <a className='btn btn-info' style={{ "margin": '5px' }} onClick={() => handleDetails(d)}>Details</a>
                                            </td>
                                        </tr>
                                    )
                                }) : <p>error</p>}

                            </tbody>
                        </table>
                        </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}


export default EmployeeList