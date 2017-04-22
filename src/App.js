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
      messages: [],
      users: []
    };

    this.postMessage = this.postMessage.bind(this);
  }

  postMessage(username, message, roomname) {

    const newMsg = {
      username: username,
      message: message,
      roomname: roomname
    }

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMsg)
    };

    fetch('http://127.0.0.1:3000/classes/messages', options)
      .then(() => this.getMessages())
      .catch(err => { console.warn(err) });
  }

  componentDidMount() {
    this.getUsers();
    this.getMessages();
  }

  getMessages() {
    fetch('http://127.0.0.1:3000/classes/messages', { method: 'GET' })
    .then(response => response.json())
    .then((messages) => this.setState({ messages }))
    .catch(err => { console.warn(err) });
  }

  getUsers() {
    fetch('http://127.0.0.1:3000/classes/getUsers', { method: 'GET' })
    .then(response => response.json())
    .then((users) => this.setState({ users }))
    .catch(err => { console.warn(err) });
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
          <MessageList messages={this.state.messages} users={this.state.users}/>
      </div>
    );
  }


}

export default App;
