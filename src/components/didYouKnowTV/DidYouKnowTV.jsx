import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DidYouKnowTV.css'

const DidYouKnowTV = () => {
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        const fetchLatestVideo = async () => {
            try {
            const response = await axios.get(
                'https://www.googleapis.com/youtube/v3/playlistItems',
                {
                    params: {
                    part: 'snippet',
                    playlistId: 'PLTphGXLtU1IeLBs7ksvUmLnDGmAB3B5QU', 
                    maxResults: 1,
                    order: 'date',
                    key: 'AIzaSyBJC1nwZpWgeKwdX9B04c0hW9meIZD7wps', 
                    },
                } 
            );
            
            const latestVideoId = 
            response.data.items[0]?.snippet.resourceId.videoId || 'DEFAULT_VIDEO_ID';

        setVideoId(latestVideoId);
      } catch (error) {
        console.error('Error fetching latest video from playlist:', error);
      }
    };

    fetchLatestVideo();
  }, []);

  if (!videoId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    );
};

export default DidYouKnowTV;


