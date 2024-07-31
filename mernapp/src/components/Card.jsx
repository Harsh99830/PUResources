import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className="card container" style={{marginTop:"50px",marginLeft:"350px",width:"800px"}}>
  <div className="card-body">
    <div className='container'>
        <h3>{props.name}</h3>
        <hr /> 
       <h6 style={{textDecoration:"underline"}}>Previous question paper :-</h6>
       <span className='fs-6 fw-bold' style={{float:"left"}}>CIE-1 </span><a className='card bg-primary text-white' style={{marginLeft:"100px",display:"flex", textAlign:"center",textDecoration:"none",width:"500px"}} href={props.cie}>Click here</a><br />
       <span className='fs-6 fw-bold' style={{float:"left"}}>Mid sem </span><a className='card bg-primary text-white' style={{marginLeft:"100px",display:"flex", textAlign:"center",textDecoration:"none",width:"500px"}} href={props.mid}>Click here</a><br />
        <span className='fs-6 fw-bold' style={{float:"left"}}>End sem </span><a className='card bg-primary text-white' style={{marginLeft:"100px",display:"flex", textAlign:"center",textDecoration:"none",width:"500px"}} href={props.end}>Click here</a>
    <hr /> 
    <h6 style={{textDecoration:"underline"}}>Notes :-</h6>
     <span className='fs-6 fw-bold' style={{float:"left"}}>Notes</span><a className='card bg-danger text-white' style={{marginLeft:"100px",display:"flex", textAlign:"center",textDecoration:"none",width:"500px"}} href={props.notes}>Click here</a><br />


    </div>
  </div>
</div>
    </div>
  )
}
