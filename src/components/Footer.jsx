import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    
         <div className='footer'>
        <div className="info">
            <div> <h2>Logo placeholder </h2></div>
            <p>Privacy policy</p>
            <p>@ 2023 company name Inc. <br/>All rights reserved developed by <a href="https://navisoftwares.org" style={{textDecoration:"none"}} >Navi</a>   </p>

            <div className="icons">
            <AiFillLinkedin size={17}/>
            <AiFillFacebook size={17}/>
            <AiFillTwitterCircle size={17}/>
             <AiFillInstagram size={17}/>
            </div>
            <div className="copyright">
            <p className='copyname'>
 </p>
            </div>
        </div>

        <div className="info">
            <h2>Company name</h2>
            <p>Career</p>
            <p>Latest news</p>
            <p>Contact us</p>
            <p>Help centre</p>
        </div>

        <div className="info">
            <h2>Rider</h2>
            <p>Full-service</p>
            <p>Earnings</p>
            <p>Support</p>
            <p>Jobs</p>
        </div>

        <div className="info">
            <h2>Company Name</h2>
            <p>Philadephia,PA</p>
            <p>Washington,DC</p>
            <p>San diego,CA</p>
            <p>denver,CO</p>
            <p>Buffalo,NY</p>
            <p>sacramento,CA</p>
            <p>IndianaPolis,IP</p>
            <p>St louis,MO</p>
            <p>Ronchester,NY</p>
            <p>Columbus,OH</p>
            <p>View all cities</p>
        </div>
        <div className="info">
            <h2>Resources</h2>
            <p>ios company name app</p>
            <p>Android company name app</p>
        </div>
    
    </div>
  )
}

export default Footer