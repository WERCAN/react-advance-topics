import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendering button - ", children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
//buradaki React.memo render yapacak component tu eger bir degisiklir olursa sadece.
