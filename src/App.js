import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  state = {
    msg: null,
  };

  updateMessage = (newMessage) => {
    this.setState({
      msg: newMessage,
    });
  };

  render() {
    return (
      <div>
        <Form updateMessage={this.updateMessage}></Form>
        {this.state.msg && <Message msg={this.state.msg}></Message>}
      </div>
    );
  }
}

export default App;
