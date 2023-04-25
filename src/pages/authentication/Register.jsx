import React, { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
import RegNext from './RegNext';
import { Link } from 'react-router-dom';
const Register = () => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer, setShowAnswer] = useState(true);

    const handleQuestion1Click = () => {
        setShowAnswer1(!showAnswer1);
        setShowAnswer(!showAnswer);
       
      };
      const handleSubmit=(e)=>{
e.preventDefault()
      }

      const [showlogin, setShowLogin] = useState(false);
    const [login, setLogin] = useState(true);

    const handleQuestion = () => {
        setShowLogin(!showlogin);
        setLogin(!login);
       
      };
    return (
        <div className='register'>
            <h3>Sign up to be a driver</h3>
            <form onSubmit={handleSubmit} className="form">
                <div className="input">
                    <span><MdLocationOn style={{background:''}}/></span>
                    <input type="text" placeholder=" &nbsp; Your postal code/ zip code" />
                </div>
            </form>
        </div>
    )
}

export default Register