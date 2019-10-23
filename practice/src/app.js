import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  sayIt = event => {
    this.setState(({ input: event.target.value }));
  }

  render() {
    return (
      <Message 
        text="This is my amazing application"
        title="This is my title"
        action={this.sayIt}
        input={this.state.input}
      ></Message>
    );
  }
}

export default App;
