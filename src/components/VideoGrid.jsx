import React from 'react';
import VideoCard from './VideoCard.jsx';

export default function VideoGrid({ videos }) {
  return (
    <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
      {videos.map((v) => (
        <VideoCard key={v.id.videoId} video={v} />
      ))}
    </div>
  );
}