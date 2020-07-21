import React from "react";

import Spinner from "react-bootstrap/Spinner";

const loading = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status" className="text-center">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <span>Fetching Data....</span>
    </div>
  );
};

export default loading;
