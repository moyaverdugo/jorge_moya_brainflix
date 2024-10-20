
import Header from "../header/Header";
import './uploadPage.css';
import heroImage from '../../assets/images/Upload-video-preview.jpg'
import uploadIcon from '../../assets/icons/upload.svg'

function UploadPage() {
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
            <img className="upload__img" src={heroImage} />
          </div>
          <div className="upload__video">
            <div className="upload__title_video">
                <label>  
                  <h4 className="silver__font"> TITLE YOUR VIDEO </h4>
                </label>
                <input className="upload__form_title form" type="text" name="search" id="search" placeholder="Add a title to your video"/>
            </div>
            <div className="upload__description_video">
              <label>
                <h4 className="silver__font"> ADD A VIDEO DESCRIPTION </h4>
              </label>
              <input className="upload__form_description form" type="text" name="search" id="search" placeholder="Add a description to your video"/>
            </div>
          </div>  
        </div>

        <div className="upload__buttons">
          <button className="button__container" type="button">
              <img src={uploadIcon} alt="Upload Icon" className="button__icon" />
              <h5 className="button__text">PUBLISH</h5>
          </button>
          <button className="button__cancel" type="button">
              <h5 className="button__cancel_text">CANCEL</h5>
          </button>
        </div>
      </div>


    </>
  );
}

export default UploadPage;