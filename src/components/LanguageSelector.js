import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a Language:
        <i
          className="us flag"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="nl flag"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
