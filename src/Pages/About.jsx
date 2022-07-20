import React, { Component } from "react";
import Cards from "../Component/Cards";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="card min-h-[73vh] bg-base-300 box-border pt-5">
          {/* U can edit more on 'Component > Cards.jsx' */}
          <Cards
            cdprofil="Ayyub"
            profils="Hai im blablabla"
            frameworks="HTML5, CSS3, JS"
          />
        </div>
      </>
    );
  }
}
