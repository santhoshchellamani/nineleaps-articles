import React from "react";
import Alert from "react-bootstrap/Alert";
const error = (props) => {
  return (
    <Alert variant="danger" className="text-center">
      {props.error}
    </Alert>
  );
};

export default error;
