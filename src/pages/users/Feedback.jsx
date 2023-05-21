import moment from 'moment'
import React from 'react'

const Feedback = () => {
  return (
    < div style={{background:'whitesmoke'}}>
     <h2 style={{textAlign:'center'}} > Recent Feedback</h2>
  
<div className="feedback">
    <div className="feedback-items">
        <h4 >John - 087473465  {moment().format('MMMM Do YYYY, h:mm:ss a')}</h4>
   <h6>Delivery rating </h6>

   <h6>Did the process make sense ? {'(Yes)'}</h6>
   <h6>Comments : hello</h6>
    </div>
</div>
</div>
    )
}

export default Feedback