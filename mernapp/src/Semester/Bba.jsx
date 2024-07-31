import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
export default function Bba() {
  return (
    <div>
       <Navbar/> 
      <div className="card p-2 bg-dark border container" style={{maxWidth:"400px", marginTop:"50px"}}>
  <div className="card-body">
    <h5 className="card-title">1st Year</h5>
    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
    <Link to="/btech" className="card-link">Card link</Link>
  </div>
</div>

<div className="card p-2 bg-dark border container" style={{maxWidth:"400px", marginTop:"50px"}}> 
     <div className="card-body">
    <h5 className="card-title">2nd Year</h5>
    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
    <Link to="/btech" className="card-link">Card link</Link>
  </div>
</div>


    </div>
  )
}
