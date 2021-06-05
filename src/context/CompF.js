import React from "react";
import { UserConsumer } from "./userContext";

function CompF() {
  return (
    <UserConsumer>
      {(value) => {
        return <div>Component F : {value}</div>;
      }}
    </UserConsumer>
  );
}

export default CompF;
