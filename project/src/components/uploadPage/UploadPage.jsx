import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../header/Header";
import './uploadPage.css';
import heroImage from '../../assets/images/Upload-video-preview.jpg'
import uploadIcon from '../../assets/icons/upload.svg'

function UploadPage() {

  // THIS IS OUT OF THE SCOPE OF THE ASSIGNMENT.... JUST TRYING TO SEE WHETHER I CAN DO SOMETHING INTERESTING HERE ////////////////////////////////////
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handlePublish = () => {
    if (title && description) {
      // Notification
      alert(`Wohoo your video "${title}" was uploaded successfully!!`); // This is within the scope. I just thought, since I have to do this i might try something with the title and description.

      // Redirect to the Home Page. Also part of the assignment
      navigate('/', { state: { selectedVideo: 'default' } }); // I assume BrainFlix 3 will include something like this and adding the video to some kind of storage.
    } else {
      // Notify user if form is incomplete
      alert('Incomplete Form');
    }
  };

  // OUT OF THE SCOPE OF THE ASSIGNMENT //////////////////////////////////////////////////////////////////////////////////////////////
  const handleCancel = () => {
    setTitle('');
    setDescription('');
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      <div className="upload">

        <div className="upload__title">
          <h1> Upload Video </h1>
        </div>

        <div className="upload__middle">
          <div className="upload__img_container">
            <h3 className="silver__font"> VIDEO THUMBNAIL</h3>
            <img className="upload__img" src={heroImage} alt="Video Thumbnail"/>
          </div>
          <div className="upload__video">
            <div className="upload__title_video">
                <label>  
                  <h4 className="silver__font"> TITLE YOUR VIDEO </h4>
                </label>
                <input className="upload__form_title form" type="text" name="search" id="search" placeholder="Add a title to your video" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="upload__description_video">
              <label>
                <h4 className="silver__font"> ADD A VIDEO DESCRIPTION </h4>
              </label>
              <input className="upload__form_description form" type="text" name="search" id="search" placeholder="Add a description to your video" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
          </div>  
        </div>

        <div className="upload__buttons">
          <button className="button__container" type="button" onClick={handlePublish}> 
              <img src={uploadIcon} alt="Upload Icon" className="button__icon" />
              <h5 className="button__text">PUBLISH</h5>
          </button>
          <button className="button__cancel" type="button" onClick={handleCancel}> 
              <h5 className="button__cancel_text">CANCEL</h5>
          </button>
        </div>
      </div>


    </>
  );
}

export default UploadPage;