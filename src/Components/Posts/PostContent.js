import React from "react";

const postcontent = (props) => {
  return (
    <tr onClick={props.clicked} style={props.styling}>
      <td>{props.rowId}</td>
      <td>{props.userId}</td>
      <td>{props.title}</td>
    </tr>
  );
};

export default postcontent;
