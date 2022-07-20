import React from "react";

const Cards = ({ cdprofil, profils, frameworks }) => (
  <>
    <div className="mockup-code max-w-full m-5">
      <pre data-prefix="$">
        <code>npm profile get profil{cdprofil}</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>getting data...</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>Done!</code>
      </pre>
      <pre data-prefix="~" className="text-success">
        <code>{profils}</code>
      </pre>
    </div>
    <div className="mockup-code max-w-full m-5">
      <pre data-prefix="$">
        <code>cd skills/tools</code>
      </pre>
      <pre data-prefix="$">
        <code>ls...</code>
      </pre>
      <pre data-prefix="$" className="text-warning">
        <code>Proficient With</code>
      </pre>
      <pre data-prefix="$" className="text-success">
        <code>{frameworks}</code>
      </pre>
    </div>
  </>
);

export default Cards;
