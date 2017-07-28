import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () =>
  <div className="app">
    <Header
      heading="Io Monitoring Dashboard"
      subheading="a real-time monitoring dashboard"
    />
    <Main />
  </div>;

export default App;
