import React, { memo } from "react";

const Heading = () => {
  return (
    <div className="heading">
      <h1 className="text-center py-3 border-bottom border-3">
        Contact Manager
      </h1>
    </div>
  );
};

export default memo(Heading);
