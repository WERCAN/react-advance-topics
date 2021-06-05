import React, { useContext } from "react";
import CompF from "./CompF";
import UserContext from "./userContext";

function CompE() {
  const context = useContext(UserContext);
  return (
    <div>
      Component E : {context}
      <CompF />
    </div>
  );
}

export default CompE;
