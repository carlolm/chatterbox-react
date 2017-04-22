import React from 'react';

import MessageListEntry from './MessageListEntry.js';

var MessageList = ({ messages, users }) => (
  <div className="message-list media">
    <table className="message-table">
      <tbody>
        {messages.map((message, index, array) => {

          let user = users.find((obj) => obj.id === message.user).username;

          return (<MessageListEntry
            key={index}
            message={message.message}
            user={user}
            roomname={message.roomname}
          />)

        }
        )}
      </tbody>
    </table>
  </div>
);

export default MessageList;