import React from 'react';

import MessageListEntry from './MessageListEntry.js';

var MessageList = ({ messages }) => (
  <div className="message-list media">
    {messages.map((message, index, array) =>
      <MessageListEntry
        key={index}
        message={message.message}
        username={message.username}
        timeStamp={message.timeStamp}
      />
    )}
  </div>
);

export default MessageList;