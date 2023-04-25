import React from 'react'

function Partnership() {
  return (
    <div className='partnership'>
        <div className="signinfo">
       <h2 style={{fontSize:'70px',color:'#470e2d',marginBottom:'30px'}}>Become part of us Today</h2>
       <p style={{
        color:'#470e2d',
        marginBottom:'70px'
       }}>Choose company for flexible earnings</p>
       <button className='btnsign'>Sign up</button>
        </div>
        <div className="image">
            <img height={500} width={500} style={{borderRadius:'20px',objectFit:'cover',marginTop:'23px'}}
             src="https://media.istockphoto.com/id/1296986175/photo/young-man-working-for-a-food-delivery-service-checking-with-road-motorcycle-in-the-city.jpg?s=612x612&w=0&k=20&c=TXsIHrSIyFlkHSpJq_AhX3V0l9X_U79e9cfpdMNH5LQ=" alt="" />
        </div>
    </div>
  )
}

export default Partnership