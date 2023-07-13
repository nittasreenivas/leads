import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
function ShowLead() {
    const [leads,setLeads] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
     axios.get("http://localhost:4000/Leads").then((res) => {
         setLeads([...res.data])
        console.log("res::",res.data)
     })
    },[])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/Leads/${id}`).then((res) => {
            alert("lead Deleted Succesfully")
            console.log("res::",res.data)
        })
    }
    const handleEdit = (lead) => {
        navigate("/editLead",{
            state:lead
        })
    }
  return (
    <div  className='m-4 text-center'>
        <h3>ShowLead</h3>
        <div>
            <table className="table table-bordered border-danger mt-4">
                <thead>
                    <tr>
                        <th className='text-center'>fullname</th>
                        <th className='text-center'>phoneNumber</th>
                        <th className='text-center'>Email</th>
                        <th className='text-center'>Course</th>
                        <th className='text-center'>Delete</th>
                        <th className='text-center'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leads.map((l,i) => {
                            return(
                                <tr key={i}>
                        <td className='text-center'>{l.fullname}</td>
                        <td className='text-center'>{l.phoneNumber}</td>
                        <td className='text-center'>{l.email}</td>
                        <td className='text-center'>{l.course}</td>
                        <td className='text-center'>
                            <button className='btn btn-danger btn-sm' onClick={() => handleDelete(l.id)}>Del</button>
                        </td>
                        <td className='text-center'>
                            <button className='btn btn-info btn-sm' onClick={() => handleEdit(l)}>EDIT</button>
                        </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ShowLead