import { useState } from 'react';
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

  const [currentVideo, setCurrentVideo] = useState(videoData[0]);
  const [videoList, setVideoList] = useState(videoData.slice(1));

  const handleVideoSelection = (selectedVideo) => {
    console.log(selectedVideo);
    const updatedVideoList = [currentVideo, ...videoList.filter(video => video.id !== selectedVideo.id)];
    setCurrentVideo(selectedVideo);
    setVideoList(updatedVideoList);
  };

  return (
    <>
      <Header />
      <Hero video={currentVideo.video} image={currentVideo.image} />
      <div className="bottom__container">
        <div className="left__container">
          <Information 
            title={currentVideo.title} 
            channel={currentVideo.channel} 
            date={currentVideo.timestamp} 
            description={currentVideo.description} 
            views={currentVideo.views} 
            likes={currentVideo.likes} 
          />
          <Comments comments={currentVideo.comments} />
        </div>
        <div className="right__container">
          <List videos={videoList} onVideoSelect={handleVideoSelection} />
        </div>
      </div>
    </>
  );
}

export default App;
