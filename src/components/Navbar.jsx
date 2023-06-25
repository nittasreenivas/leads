import React from 'react'
 import { Link } from 'react-router-dom'
 import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../features/User/userSlice'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const {userDetails} =   useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
        {
            userDetails === null && (
                <ul className="navbar-nav">
                    <li className="nav-item">
        <Link className="nav-link active" to="/home">Home</Link>
      </li>
                <li className="nav-item ml-auto">
                <Link className="nav-link active" to="/register">Register</Link>
                </li>
                <li className="nav-item ml-auto">
                <Link className="nav-link active" to="/login">Login</Link>
                </li>
              </ul>
            )
        }
        {
            userDetails !== null && (
                <>
                <li className="nav-item">
                <Link className="nav-link active" to="/">LeadSearch</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/addLead">Lead Entry</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/showLead">Show Leads</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/editLead">Edit Lead</Link>
                </li>
                <li className="nav-item">
               <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                </li>
                </>
            )
        }
      
     
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar