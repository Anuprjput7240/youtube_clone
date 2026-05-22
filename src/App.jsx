import React, { useEffect, useState } from "react";
import video from './video.mp4'

export default function App() {


  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Vikram Sarkar");

  const API_KEY = "AIzaSyCol0KSBMuXFzMsrI-WJIWt_bC58ElIbdQ";
  // const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  // 🔹 Fetch videos from YouTube API
  const fetchVideos = async (query) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${query}&key=${API_KEY}`
      );
      const data = await res.json();
      console.log("Fetched data:", data);
      setVideos(data.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // 🔹 Fetch initial data
  useEffect(() => {
    fetchVideos(searchQuery);
  }, []);

  // 🔹 Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      fetchVideos(searchQuery);
      setSelectedVideo(null);
    }
  };

  // console.log(videos[1]);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      {/* 🔹 Header */}
      <div
        style={{
          background: "#ff0000",
          color: "#fff",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: 0 }}>🎬 Mini YouTube Clone</h2>

        {/* 🔹 Search bar */}
        <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos..."
            style={{
              padding: "8px 12px",
              border: "none",
              color: "black",
              borderRadius: "4px 0 0 4px",
              outline: "none",
              width: "240px",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "0 4px 4px 0",
              cursor: "pointer",
            }}
          >
            🔍
          </button>
        </form>
      </div>

      {/* 🔹 Video Player */}
      {selectedVideo && (
        <div style={{ margin: "20px auto", width: "80%", textAlign: "center" }}>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            title={selectedVideo.snippet.title}
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "10px" }}
          ></iframe>
          <h3 style={{ marginTop: "10px" }}>{selectedVideo.snippet.title}</h3>
        </div>
      )}

      {/* 🔹 Video Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            onClick={() => setSelectedVideo(video)}
            style={{
              cursor: "pointer",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  margin: "0 0 6px 0",
                  color: "#333",
                }}
              >
                {video.snippet.title}
              </h4>
              <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
