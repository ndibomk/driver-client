import React, { useState } from 'react'
import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 100,
  height: 100,
  facingMode: 'user',
}
const Profile = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  return (
    <div>
      <h2 className="mb-5 text-center">
        React Photo Capture using Webcam Examle
      </h2>
      <div>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={100}
            ref={webcamRef}
            width={100}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        {picture != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
export default Profile