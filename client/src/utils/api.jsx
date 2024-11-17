import axios from 'axios';

class ClassApi {
  constructor(baseUrl = import.meta.env.VITE_API_BASE_URL) {
    this.baseUrl = baseUrl;
    console.log("Base URL:", this.baseUrl);
  }

  async getVideos() {
    try {
      const response = await axios.get(`${this.baseUrl}/videos`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video list:', error);
      return [];
    }
  }

  async getVideoDetails(videoId) {
    try {
      const response = await axios.get(`${this.baseUrl}/videos/${videoId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video details:', error);
      return null;
    }
  }

  async postComment(videoId, commentData) {
    try {
      const response = await axios.post(`${this.baseUrl}/videos/${videoId}/comments`, commentData);
      return response.data;
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error;
    }
  }

  async deleteComment(videoId, commentId) {
    try {
      const response = await axios.delete(`${this.baseUrl}/videos/${videoId}/comments/${commentId}`);
      return response.data; // { message: 'Comment deleted successfully' }
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
  }

  async postVideo(videoData) {
    try {
      const response = await axios.post(`${this.baseUrl}/videos`, videoData);
      return response.data;
    } catch (error) {
      console.error('Error posting video:', error);
      throw error;
    }
  }
}

export default ClassApi;
