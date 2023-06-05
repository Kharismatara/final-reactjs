import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";

class ChatBox extends Component {
  componentDidMount() {
    Crisp.configure("MY_CRISP_WEBSITE_ID");
  }

  render() {
    return <div>My Awesome App</div>;
  }
}

export default ChatBox;
