import React from "react";
import axios from "axios";

const PlanController = ({ availablePlans, currentPlan }) => {
  const options = [];
  options.push(<option value={0}>--Select a Plan--</option>);
  availablePlans.map(plan =>
    options.push(<option value={plan.PlanID}>{plan.Name}</option>)
  );
  return (
    <React.Fragment>
      <select id="PlanSelector" name="PlanSelector" value={currentPlan}>
        {options}
      </select>
      <input
        type="text"
        id="PlanName"
        placeholder="Input New Plan Name Here."
      />
      <button type="button" id="SavePlan">
        Save Current Plan
      </button>
      <button type="button" id="SaveAsNewPlan">
        Save as New Plan
      </button>
    </React.Fragment>
  );
};

export default PlanController;
