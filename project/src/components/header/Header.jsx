import logo from '../../assets/logo/BrainFlix-logo.svg';
import photo from '../../assets/images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/icons/upload.svg';
import searchIcon from '../../assets/icons/search.svg';
import './header.css';

const Header = () => {

    return (
      <header className="header">
        <nav id="nav" className="nav">
            <div className="nav__left">
                <a href="../index.html">
                <img className="logo" src={logo} alt="BrainFlix logo" /> 
                </a>
            </div>
            <div className="nav__right">
                <div className="nav__form_avatar">
                    <div className="nav__form">
                        <div className="form__container">
                            <img src={searchIcon} alt="Search Icon" className="form__icon" /> 
                            <input className="search__form form" type="text" name="search" id="search" placeholder="Search"/>
                        </div>
                    </div>
                    <img class="nav__avatar avatar" src={photo} alt="converation photo" />
                </div>
                <button class="button__container" type="submit">
                    <img src={uploadIcon} alt="Upload Icon" className="button__icon" />
                    <h5 class="button__text">UPLOAD</h5>
                </button>
            </div>
        </nav>
      </header>
    );
  };
  
  export default Header;