import React, { Component } from "react";

import LanguageContect from "../context/LanguageContext";
import ColorContect from "../context/ColorContext";
import UserCreate from "./UserCreate";

class App extends Component {
  state = {
    language: "english",
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:
          <i
            className="us flag"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="nl flag"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <ColorContect.Provider value="primary">
          <LanguageContect.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContect.Provider>
        </ColorContect.Provider>
      </div>
    );
  }
}

export default App;
