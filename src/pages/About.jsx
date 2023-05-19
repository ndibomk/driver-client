import React from 'react'

const About = () => {
  return (
    <div className="main-about-page">
        <h1 style={{fontWeight:'900', fontSize:'40px',marginTop:'1rem', marginBottom:'30px'}}>How it works</h1>
        <div className="main-about-content">
            <div className="about-num">
                <div className="about-numbers">
            <div style={{}} className="main-one">
               <h3 style={{fontWeight:'900',width:'100%'}}>Consistent pay rises!</h3>
               <h5 style={{fontSize:'1rem', fontWeight:'',width:'10rem'}}>
                Every time you complete an order milestone.Your rate goes up its simple as that .No strings attached.
               </h5>
            </div>
            <div className="main-two">
            <h3 style={{fontWeight:'900'}}>No hassle payment</h3 >
               <h5 style={{fontSize:'1rem', fontWeight:''}}>
                As soon as we get payed.You get payed.Period
               </h5>
            </div>
            </div>
            <div className="">
                <img className='about-img' src="https://biv.com/sites/default/files/styles/media_image/public/2023-01/tech-exporting-gettyimages-yuichirochino.jpg?h=ea06172a&itok=JgDN9kYe" alt="" />
            </div>
            </div>
            <div className="about-three">
            <h3 style={{fontWeight:'900'}}>No more waiting for orders!</h3>
               {/* <p style={{fontSize:'.998rem', fontWeight:''}}> */}
             <h6> company name lets you take control of your delivery experience</h6>
              <div className="step-one">
                <h4>Step one </h4>
              <h6>Is to find dull tools whether from your neighbours or from proffesional kitchen dulls are everywhere! we will providee you with price lists to give out and territory to sharpen for.</h6>
                </div>

              <div className="step-two">
                <h4>Step two </h4>
                <h6>Step two fill out your provided 'toe tag' with the customers information (name,adress and phone number).</h6>
{/* </p> */}    </div>

               <div className="step-three">
                <h4>Step three</h4>
                <h6> Step three  bring the tools or knives back to home base located at 5002 fawn lake Dr san antonio 78244 well sharpen them up and send you on your way. </h6>  
           </div>

           <div className="step-four">
                <h4>Step four</h4>
                <h6> Step four Return the tools to your customer Have them show your receipt and you will be payed instantly. </h6>   
          </div>

            </div>
        </div>
<div className="about-content">

</div>
    </div>
  )
}

export default About