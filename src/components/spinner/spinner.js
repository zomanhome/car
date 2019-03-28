import React from "react";

import "./style.scss";

const Spinner = () => {
  return (
    <div className="lds-css ng-scope spinner">
      <div className="lds-pacman">
        <div>
          <div />
          <div />
          <div />
        </div>
        <div>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
