import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MessageList from './MessageList.js';
// import MessageListEntry from './MessageListEntry.js';
import InputBox from './InputBox.js';
// import fs from 'fs';
// import JSONfile from 'jsonfile';
// import * as fs from 'fs-web';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      time: JSON.stringify(new Date()),
      // messages: [{username:'yvonne', message:'lalala', timeStamp:'2017-04-18T19:32:41.500Z'}, {username:'yvonne', message:'lalala', timeStamp: '2017-04-18T19:32:41.500Z'}]
      messages: []
    };

    this.postMessage = this.postMessage.bind(this);
  }

  // componentDidMount() {
  //   console.log('** did mount **');
  //   // fs.readFile('.npm/data.txt', 'utf8', function readFileCallback(err, data) {
  //   //   if (err) {
  //   //     console.log('** fs error', err);
  //   //   } else {
  //   //     console.log('** data **', data);
  //   //   }
  //   // });
  // }

  postMessage(username, message) {
    let newMsg = {
      username: username,
      message: message,
      timeStamp: JSON.stringify(new Date())
    }
    //debugger;

    this.setState({ messages: [...this.state.messages, newMsg]});    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cool Chatterbox</h2>
        </div>
        <div>
          <InputBox postMessage={this.postMessage}/>
        </div>
          <MessageList messages={this.state.messages}/>
      </div>
    );
  }


}

export default App;
