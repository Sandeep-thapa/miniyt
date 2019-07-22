import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoID}`;
    return (
        <div className="ui embed">
            <iframe src={videoSrc} />
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}
                </h4>
            </div>
        </div>
    )
};

export default VideoDetail;