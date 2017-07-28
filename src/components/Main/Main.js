import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import IcingaServicesWithProblems from "../IcingaServicesWithProblems/IcingaServicesWithProblems";
import IcingaAllHosts from "../IcingaAllHosts/IcingaAllHosts";
import WhmMailQueue from "../WhmMailQueue/WhmMailQueue";
import "./Main.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      loaded: false,
      endpoint: "http://127.0.0.1:4000"
    };
  }

  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("FromAPI", data =>
      this.setState({ response: data, loaded: true })
    );
  }

  render() {
    const { response, loaded } = this.state;
    return loaded
      ? <div className="main">
          <IcingaServicesWithProblems
            data={response.icingaServicesWithProblems}
          />
          <WhmMailQueue data={response.whmMailQueue} />
          <IcingaAllHosts data={response.icingaHosts} />
        </div>
      : <p>LOADING ...</p>;
  }
}

export default Main;
