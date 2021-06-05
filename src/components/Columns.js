import React from "react";

function Columns() {
  const items = [];
  //we can also use React.Fragment in a map function
  // or we can use empty tag as well like this: <> </>
  return (
    <>
      {/* {items.map((item) => (
        <React.Fragment>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))} */}
      <td>Name</td>
      <td>Muslum</td>
    </>
  );
}

export default Columns;
