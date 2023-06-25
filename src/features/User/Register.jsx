import React from 'react'
import { Formik } from 'formik';
import axios from "axios"
function Register() {
  return (
    <div>
        <h3>Register</h3>
        <Formik initialValues={{firstname:'',lastname:'',username:'',password:''}}
        onSubmit={(values,x) => {
            axios.post("http://localhost:4000/users",values).then((res) => {
                alert("user added Succesfully")
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
                      <input type="text" placeholder='enter firstname' name="firstname" onChange={handleChange}
                      onBlur={handleBlur} value={values.firstname}/><br/>
                       <input type="text" placeholder='enter lastname' name="lastname" onChange={handleChange}
                      onBlur={handleBlur} value={values.lastname}/><br/>
                       <input type="text" placeholder='enter username' name="username" onChange={handleChange}
                      onBlur={handleBlur} value={values.username}/><br/>
                       <input type="password" placeholder='enter password' name="password" onChange={handleChange}
                      onBlur={handleBlur} value={values.password}/><br/>
                      <button type="submit">Register</button>
                        </form>
                    </div>
                )
            }
           }
        </Formik>
    </div>
  )
}

export default Register