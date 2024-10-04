import './App.css';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Information from "./components/information/Information"; 
import Comments from "./components/comments/Comments";
import List from "./components/list/List";

import './styles/global.css';
import './styles/app.css';

import videoData from './data/video-details.json'; 


function App() {
  const videos = videoData;

  return (
    <>
      <Header />
      <Hero video={videos[0].video} image={videos[0].image} />
      <div className="bottom__container">
        <div className="left__container">
          <Information 
            title={videos[0].title} 
            channel={videos[0].channel} 
            date={videos[0].timestamp} 
            description={videos[0].description} 
            views={videos[0].views} 
            likes={videos[0].likes} 
          />
          <Comments comments={videos[0].comments} />
        </div>
        <div className="right__container">
          <List videos={videos} /> 
        </div>
      </div>
    </>
  );
}

export default App;
