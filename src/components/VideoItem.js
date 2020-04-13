// https://semantic-ui.com/elements/list.html
import React from "react";
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    // props.xxx.setState({videoClicked: 'videoTitle.id.videoId'});

    return (
        <div className="video-item item"
             onClick={() => onVideoSelect(video)}
        >
            <img className="ui image"
                 src={video.snippet.thumbnails.medium.url}
                 alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};
export default VideoItem