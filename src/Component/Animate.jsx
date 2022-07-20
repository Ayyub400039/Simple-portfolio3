import React from "react";

const Animate = () => {
  const aniBox = () => {
    const row = [];
    for (let i = 0; i < 20; i++) {
      row.push(<li key={i} />);
    }
    return row;
  };
  return (
    <div className="wrap z-0">
      <ul className="box">{aniBox()}</ul>
    </div>
  );
};

export default Animate;
