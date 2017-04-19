import React from 'react';

import MessageListEntry from './MessageListEntry.js';

var MessageList = ({ messages }) => (
  <div className="message-list media">
    <table className="message-table">
      <tbody>
        {messages.map((message, index, array) =>
          <MessageListEntry
            key={index}
            message={message.message}
            username={message.username}
            timeStamp={message.timeStamp}
          />
        )}
      </tbody>
    </table>
  </div>
);

export default MessageList;