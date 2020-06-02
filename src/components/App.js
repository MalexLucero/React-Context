import React, { Component } from "react";

import LanguageSelector from "../components/LanguageSelector";
import { LanguageStore } from "../context/LanguageContext";
import ColorContect from "../context/ColorContext";
import UserCreate from "./UserCreate";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContect.Provider value="primary">
            <UserCreate />
          </ColorContect.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;

