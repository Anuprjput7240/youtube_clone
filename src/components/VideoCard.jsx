import React from 'react';

export default function VideoCard({ video }) {
  const { title, channelTitle, thumbnails } = video.snippet;
  const videoId = video.id.videoId;

  return (
    <div
      onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
      className="cursor-pointer bg-white rounded shadow hover:shadow-lg transition p-2"
    >
      <img src={thumbnails.medium.url} alt={title} className="rounded w-full" />
      <h3 className="font-semibold mt-2 text-sm">{title}</h3>
      <p className="text-xs text-gray-600">{channelTitle}</p>
    </div>
  );
}