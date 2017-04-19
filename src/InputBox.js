import React, { Component } from 'react';

/*var InputBox = ({handleSubmit}) => (
  <form action="" onSubmit={(event) => handleSubmit(event,
      document.querySelector('#username').value, 
      document.querySelector('#message').value
  )}>
    Username: <input type="text" name='username' id="username"/>
    Message: <input type="text" name='message' id="message"/>
    <input type="submit" value="Submit" />
  </form>
);*/
class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postMessage(this.state.username, this.state.message);
    this.setState({username: '', message: ''});
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        Username: <input onChange={this.handleUsernameChange} type="text" value={this.state.username} id="username" />
        Message: <input onChange={this.handleMessageChange} type="text" value={this.state.message} id="message" />
        <input type="submit" value="Submit" />
      </form>
    );
  };

}

export default InputBox;