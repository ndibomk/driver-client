import React, { useState } from 'react'
import Register from './authentication/Register';
import MainAuth from './authentication/MainAuth';

const Hero = () => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer, setShowAnswer] = useState(true);

    const handleQuestion1Click = () => {
        setShowAnswer1(!showAnswer1);
        setShowAnswer(!showAnswer);
       
      };
    //   const handleQuestion1Click1 = () => {
    //     setShowAnswer(!showAnswer);
       
    //   };
  return (
    <div className='hero'>
        <div className="left">
            <div className="hero-pg"><h4 className='introp'>
            Ditch the dinner deliveries drive with a sharper purpose.
                </h4>
               
                </div>
                <div className="quiz-content">
            <div className='question-title'>
       
        <div className="herobtn"><button onClick={handleQuestion1Click} className='btnhero'>Sign up</button>
       </div>
        </div>
        
            </div>
            
        </div>
        <div className="right" >
          {showAnswer ? <img src="https://media.istockphoto.com/id/1253501430/photo/delivery-biker-arriving-at-destination-motogirl.jpg?s=612x612&w=0&k=20&c=GxenUWkAgMNjYmXYrrSdDQolfEIKJW0zgXaH3NuOj48=" alt="" />:
                  <p>{showAnswer1 &&<MainAuth/>}</p>
                }  
        </div>
        
    </div>
  )
}

export default Hero