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
    <div  className='border border-2 border-success m-2 p-2'>
        <h3>ShowLead</h3>
        <div>
            <table className="table table-bordered border-danger">
                <thead>
                    <tr>
                        <th>fullname</th>
                        <th>phoneNumber</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leads.map((l,i) => {
                            return(
                                <tr key={i}>
                        <td>{l.fullname}</td>
                        <td>{l.phoneNumber}</td>
                        <td>{l.email}</td>
                        <td>{l.course}</td>
                        <td>
                            <button className='btn btn-danger btn-sm' onClick={() => handleDelete(l.id)}>Del</button>
                        </td>
                        <td>
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