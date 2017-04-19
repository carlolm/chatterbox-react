import React from 'react';

var MessageListEntry = ({ message, username, timeStamp }) => (
  <tr className="message-list-entry">
    <td className="username">{username}</td>
    <td className="message-box">
      <p className="message-text">{message}</p>
      <span className="timestamp">{timeStamp}</span>
    </td>
  </tr>
);

export default MessageListEntry;