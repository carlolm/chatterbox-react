import React from 'react';

var MessageListEntry = ({ message, user, roomname }) => (
  <tr className="message-list-entry">
    <td className="username">{user}</td>
    <td className="message-box">
      <p className="message-text">{message}</p>
      <span className="timestamp">{roomname}</span>
    </td>
  </tr>
);

export default MessageListEntry;