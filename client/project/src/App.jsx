import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UploadPage from "./components/uploadPage/UploadPage";  
import Video from "./components/video/Video";  
import NotFoundPage from "./components/notFoundPage/NotFoundPage";  
import axios from 'axios';
import './styles/global.scss';

// Class to manage the API -----------------------------------------------------------------------------------
// I could have put this in a separate json file. But i didnt know whether is easier to have everything inside the
// same component file or having it on a separate file.
class ClassApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
  }

  async getVideos() {
    try {
      const response = await axios.get(`${this.baseUrl}/videos?api_key=${this.apiKey}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video list:', error);
      return [];
    }
  }

  async getVideoDetails(videoId) {
    try {
      const response = await axios.get(`${this.baseUrl}/videos/${videoId}?api_key=${this.apiKey}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video details:', error);
      return null;
    }
  }

  async postComment(videoId, commentText) {
    try {
      const response = await axios.post(`https://your-api-url/videos/${videoId}/comments`, {
        comment: commentText,
      });
      return response.data; // Return the newly added comment
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error;
    }
  }
}

// Function to get the API KEY ----------------------------------------------------------------------------------
const getApiKey = async () => {
  try {
    const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/register');
    return response.data;
  } catch (error) {
    console.error('Error registering API key:', error);
  }
};

// App functionality ----------------------------------------------------------------------------------
function App() {
  // Declaring my variables ---------------------------------
  const [defaultVideo, setDefaultVideo] = useState(null);// Default video that will show on the home page
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);// Loading to avoid rendering incomplete data
  const [api, setApi] = useState(null); 
  
  // Controlling the API execution with use ---------------------------------
  useEffect(() => {
    const fetchApiData = async () => {
      const apiKey = await getApiKey(); 
      const classApi = new ClassApi(apiKey); // Creating the class 
      setApi(classApi); // Assigning it to the api variable

      const videos = await classApi.getVideos(); // Pulling the videos
      setVideoList(videos); // Assigning them to the videoList variable

      if (videos.length > 0) { // Initial default video
        const initialVideo = await classApi.getVideoDetails(videos[0].id);
        setDefaultVideo(initialVideo);
      }

      setLoading(false);
    };

    fetchApiData();
  }, []);
  
  // Adding a loading message ---------------------------------
  if (loading) {
    return <div>Loading...</div>; 
  }
  // App architecture ---------------------------------
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Video 
            defaultVideo={defaultVideo} 
            videoList={videoList} 
          />} 
        />
        <Route 
          path="/upload" 
          element={<UploadPage />} 
        />
        <Route 
          path="/video/:videoId" 
          element={<Video 
                     videoList={videoList} 
                     api={api} />} 
        />
        <Route 
          path="*" 
          element={<NotFoundPage />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;