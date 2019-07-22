import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            onClick={() => onVideoSelect(video)}
            className="video-item">
            <img className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description} />
            <div className="content">
                <div className="ui header">
                    {video.snippet.title}
                </div>
            </div>
        </div>

    );
}

export default VideoItem;