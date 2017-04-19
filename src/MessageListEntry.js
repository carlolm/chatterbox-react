import React from 'react';

var MessageListEntry = ({ message, username, timeStamp }) => (
  <div className="video-list-entry">
    <div className="media-body">
      <div>{username}</div>
      <div>{message}</div>
      <div>{timeStamp}</div>
    </div>
  </div>
);

export default MessageListEntry;