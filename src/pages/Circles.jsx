import React from 'react';

const Test = () => {

  const containerStyle = {
  width: '100%',
    height: '100%,',
   
  };

  const circleStyle = {
    fill: '#760c46',
    stroke: 'black',
    strokeWidth: '.5',
    
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fill:'white'
  };

  const lineStyle = {
    stroke: 'black',
    strokeWidth: '1',
  }

  return (
    <>
      <svg viewBox="0 0 500 100" style={containerStyle}>
        <circle cx="60" cy="50" r="18" style={circleStyle} />
        <text x="60" y="50" style={textStyle}>1</text>

        <line x1="75" y1="50" x2="200" y2="50" style={lineStyle} />

        <circle cx="215" cy="50" r="18" style={circleStyle} />
        <text x="215" y="50" style={textStyle}>2</text>

        <line x1="230" y1="50" x2="370" y2="50" style={lineStyle} />

        <circle cx="365" cy="50" r="18" style={circleStyle} />
        <text x="365" y="50" style={textStyle}>3</text>
      </svg>
    </>
  );
}

export default Test;
