import React from 'react'
import { Formik } from 'formik';
import axios from "axios"
function LeadEntry() {
  return (
    <div  className='border border-2 border-info m-2 p-2'>
        <h3> LeadEntry</h3>
        <Formik initialValues={{fullname:'',phoneNumber:'',email:'',course:''}}
        onSubmit={(values,x) => {
            axios.post("http://localhost:4000/Leads",values).then((res) => {
                alert("lead added succesfully")
                console.log("res::",res.data)
            })
            console.log("values::",values)
            x.resetForm()
        }}>
           {
            ({values,handleBlur,handleChange,handleSubmit}) => {
                return(
                    <div>
                        <form onSubmit={handleSubmit}>
                      <input type="text" placeholder='enter fullname' name="fullname" onChange={handleChange}
                      onBlur={handleBlur} value={values.fullname}/><br/>
                       <input type="text" placeholder='enter phoneNumber' name="phoneNumber" onChange={handleChange}
                      onBlur={handleBlur} value={values.phoneNumber}/><br/>
                       <input type="text" placeholder='enter email' name="email" onChange={handleChange}
                      onBlur={handleBlur} value={values.email}/><br/>
                       <input type="text" placeholder='enter course' name="course" onChange={handleChange}
                      onBlur={handleBlur} value={values.course}/><br/>
                      <button type="submit">addLead</button>
                        </form>
                    </div>
                )
            }
           }
        </Formik>
        </div>
  )
}

export default LeadEntry