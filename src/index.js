import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./components/Menu1/Pages";
import Sections from "./components/Menu3/Sections";
import Variables from "./components/Menu2/Variables";
import Bass from "./components/Bass/Bass";

import "./styles.css";

class App extends Component {
  state = {
    Pages: false,
    Sections: false,
    Variables: false
  };

  reset = () => {
    this.setState({
      Pages: false,
      Sections: false,
      Variables: false
    });
  };

  triggerPages = () => {
    this.setState({
      Pages: true,
      Sections: false,
      Variables: false
    });
  };

  triggerSections = () => {
    this.setState({
      Pages: false,
      Sections: true,
      Variables: false
    });
  };

  triggerVariables = () => {
    this.setState({
      Pages: false,
      Sections: false,
      Variables: true
    });
  };

  render() {
    let togglePages = null,
      toggleSections = null,
      toggleVariables = null;

    if (this.state.Pages) {
      togglePages = <Pages show={this.state.Pages} triggerReset={this.reset} />;
    }

    if (this.state.Sections) {
      toggleSections = <Sections triggerReset={this.reset} />;
    }

    if (this.state.Variables) {
      toggleVariables = <Variables triggerReset={this.reset} />;
    }
 
    return (
      <div className="App">
        <NavBar
          triggerPages={this.triggerPages}
          triggerVariables={this.triggerVariables}
          triggerSections={this.triggerSections}
        />
        <div className="wrapper">
          <Bass reset={this.reset} />
          <Pages show={this.state.Pages} triggerReset={this.reset} />
          <Sections show={this.state.Sections} triggerReset={this.reset} />
          <Variables show={this.state.Variables} triggerReset={this.reset} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
