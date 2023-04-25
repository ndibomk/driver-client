import React, { useState } from 'react';
import {AiOutlinePlus,AiOutlineMinus} from'react-icons/ai'
function Questions() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);

  const handleQuestion1Click = () => {
    setShowAnswer1(!showAnswer1);
    setShowAnswer2(false);
    setShowAnswer3(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };

  const handleQuestion2Click = () => {
    setShowAnswer2(!showAnswer2);
    setShowAnswer1(false);
    setShowAnswer3(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };

  const handleQuestion3Click = () => {
    setShowAnswer3(!showAnswer3);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };
  const handleQuestion4Click = () => {
    setShowAnswer4(!showAnswer4);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer3(false);
    setShowAnswer5(false);
    setShowAnswer6(false);
  };
  const handleQuestion5Click = () => {
    setShowAnswer5(!showAnswer5);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer4(false);
    setShowAnswer3(false);
    setShowAnswer6(false);
  };
  const handleQuestion6Click = () => {
    setShowAnswer6(!showAnswer3);
    setShowAnswer1(false);
    setShowAnswer2(false);
    setShowAnswer4(false);
    setShowAnswer5(false);
    setShowAnswer3(false);
  };

  return (
    <div className='u'>
    
   <h1 className='quiz-header'>Common questions about shopping with instacart</h1>
    <div className='main-Questions'>
        
        <div className="questions">
            <div className="quiz-content">
            <div className='question-title'>
        <p>What is company name</p>
        <h2 onClick={handleQuestion1Click}>
          {showAnswer1 ? <AiOutlineMinus/> : <AiOutlinePlus size={25}/>}
        </h2>
        </div>
        <p>{showAnswer1 && <p>Answer 1</p>}</p>
        
            </div>
      <hr />
      
      <div className="quiz-content">
        <div className="question-title">
            <p>How do i sign up to become comapany name shopper in us</p>
        <h2 onClick={handleQuestion2Click}>
           {showAnswer2 ? <AiOutlineMinus/> : <AiOutlinePlus size={25}/>}
        </h2>
        
        </div>
        <p>{showAnswer2 && <p>Answer 2</p>}</p>
      </div>
      <hr />
      <div className="quiz-content">
        <div className="question-title">
            <p>How do i get paid?</p>
        <h2 onClick={handleQuestion3Click}>
           {showAnswer3 ? <AiOutlineMinus/> : <AiOutlinePlus size={25}/>}
        </h2>
        
        </div>
        <p>{showAnswer3 && <p>Answer 3</p>}</p>
      </div>
      <hr />
      <div className="quiz-content">
        <div className="question-title">
            <p>What are the requirements to become a company name shopper in usa?</p>
        <h2 onClick={handleQuestion4Click}>
           {showAnswer4 ? <AiOutlineMinus/> : <AiOutlinePlus size={25}/>}
        </h2>
        
        </div>
        <p>{showAnswer4 && <p>Answer 4</p>}</p>
      </div>
      <hr />
      <div className="quiz-content">
        <div className="question-title">
            <p>What documents do i need to sign up?</p>
        <h2 onClick={handleQuestion5Click}>
           {showAnswer5 ? <AiOutlineMinus/> : <AiOutlinePlus size={25}/>}
        </h2>
        
        </div>
        <p>{showAnswer5&& <p>Answer 5</p>}</p>
      </div>
     
      </div>
    </div>
    </div>
  );
}

export default Questions