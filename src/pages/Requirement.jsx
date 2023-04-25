import React from 'react'

function Requirement() {
  return (
    
    <div className="requiremain">
    <h5>Requirements</h5>
    <div className='Requirement'>
        
        <div className="circle1">
          <div className="circle">
            <h1 className='number'>1</h1>
          </div>
          <div className="content">
            <p style={{color:'#760c46',fontSize:'1.6rem'}}>Age </p>
            <p>Our drivers must be 18+</p>
          </div>
          <div className="line"></div>
        </div>
        
        <div className="circle1">
        <div className="circle">
        <h1 className='number2'>2</h1>
        </div>
          <div className="content">
            <p style={{color:'#760c46',fontSize:'1.6rem'}}>Transportation</p>
            <p> Our drivers will be carrying orders to and from the 'Home base' on a regular basis</p>
          </div>
          <div className="lines"></div>

        </div>
        <div className="circle1">
        <div className="circle">
        <h1 className='number3' >3</h1>
        </div>
          <div className="content">
            <p style={{color:'#760c46',fontSize:'1.6rem'}}>Documentation</p>
            <p>Valid Driver Licence</p>
           
          </div>
        </div>

    </div>
    </div>
  )
}

export default Requirement