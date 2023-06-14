import React from "react";

export default function Island({ island, changeIsland }) {
  return (
    <div onClick={() => changeIsland(island)} className="Island">
      <h3>{island.name}</h3>
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
