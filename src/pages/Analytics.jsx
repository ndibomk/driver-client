import React from 'react'

const Analytics = () => {
  return (
    <div style={{background:'rgb(243, 240, 240)',paddingBottom:'7rem',paddingTop:'1rem'}}>
    <h4 style={{textAlign:'center'}}>Analytics</h4>
    <h5 style={{textAlign:'center'}}>Today 30 days 365 days Lifetime</h5>
    <div className='main-tria' >
        
        <div className="main-tri">
        <div className="triangle">
            <div className="tri-items">
            <div className="analytics-one">
<h6 style={{fontSize:'',marginLeft:'3rem',paddingTop:'1rem'}}>1,000
          <h6 style={{fontSize:'.8rem',marginRight:'rem',paddingRight:'1rem'}}>Page views</h6>
          </h6>
            </div>
            <div className="analytics-one">
              <h6 style={{fontSize:'',marginLeft:'2.7rem',paddingTop:'1rem'}}>500(50%)
          <h6 style={{fontSize:'.8rem',marginRight:'0',paddingLeft:'0'}}>Signed up</h6>
            </h6>
            </div>
            <div className="analytics-one">
              <h6 style={{fontSize:'',marginLeft:'2.4rem',paddingTop:'1rem'}}>400(40%)
          <h6 style={{fontSize:'.8rem',marginRight:'0',paddingLeft:'0'}}>Completed First Drive </h6>  </h6>
            </div>
            <div className="analytics-one">

               <h6 style={{fontSize:'',marginLeft:'2.2rem',paddingTop:'1rem'}}>300(30%)
          <h6 style={{fontSize:'.8rem',marginRight:'0',paddingLeft:'0'}}>Active Drivers</h6></h6>  
            </div>
            </div>
            
          
          
          
         
        </div>
        </div>
        
    </div>
   <div className="analytics-btns">
   <div className="seperate-one">
<button className="analytics-btn-one">$100 profit</button>
<button className="analytics-btn-one">$1000 net</button>
<button className="analytics-btn-one">20 orders</button>
   </div>
   <div className="seperate-one">
   <button className="analytics-btn-one"></button>
   <button className="analytics-btn-one"></button>
   <button className="analytics-btn-one"></button>
    
    </div>
   </div>
    </div>
  )
}

export default Analytics