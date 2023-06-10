import React, { useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import './cam.css'; // Import the CSS file

const WebcamComponent = () => <Webcam />;

const Profile = () => {
  const [picture, setPicture] = useState('');
  const [responseText, setResponseText] = useState('');

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(async () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    console.log(pictureSrc);

    try {
      const formData = new FormData();
      formData.append('face', pictureSrc);

      const response = await axios.post('http://192.168.1.11:5000/emotion', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Image successfully posted');
      console.log(response.data);

      // Set the response data in the state
      setResponseText(JSON.stringify(response.data));
    } catch (error) {
      console.error('Failed to post image:', error);
    }
  }, []);

  const handleRetake = () => {
    setPicture('');
    setResponseText('');
  };

  return (
    <div className="container">
      <p className="title">Recognition and Emotion Detection</p>

      <div className="webcam-container">
        {picture === '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpg"
          />
        ) : (
          <img src={picture} alt="Captured" />
        )}
      </div>
      <div className="button-container">
        {picture !== '' ? (
          <>
            <button className="button" onClick={handleRetake}>
              Retake
            </button>
          </>
        ) : (
          <button className="button" onClick={capture}>
            Capture
          </button>
        )}
      </div>
      <div className='title'>
      {responseText && <p className="response">{JSON.parse(responseText).emotion}</p>}
      </div>
    </div>
  );
};

export default Profile;