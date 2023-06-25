import React from 'react'
import { Formik } from 'formik';
import axios from "axios"
import { useLocation } from 'react-router-dom';
function EditLead() {
    const {state:lead} = useLocation()
   
  return (
    <div  className='border border-2 border-secondary m-2 p-2'>
        <h3>EditLead </h3>
        <Formik initialValues={{...lead}}
        onSubmit={(values,x) => {
            axios.put(`http://localhost:4000/Leads/${values.id}`,values).then((res) => {
                alert("lead updated succesfully")
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
                      <button type="submit">update Lead</button>
                        </form>
                    </div>
                )
            }
           }
        </Formik>
    </div>
  )
}

export default EditLead