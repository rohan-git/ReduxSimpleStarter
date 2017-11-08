import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  var videoItems = props.videos.map((videoNumber) => {
    return ( <VideoListItem key = {videoNumber} itemNumber = { videoNumber }> </VideoListItem>);
  });

  return (
    <ul className = "col-md-4 list-group">
      <div> { props.videos.length } </div> <br />
      <div> { videoItems } < /div>
    </ul>
  );

}

export default VideoList;
