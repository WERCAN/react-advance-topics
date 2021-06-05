import React from "react";

function MemoComponent({ name }) {
  console.log("Rendering memo component");
  return <div>{name}</div>;
}

export default React.memo(MemoComponent);
// React.memo fonksiyonu sadece bir defa render yapmasini sagliyor
// Pure component Class component icin bir defa render yapior
