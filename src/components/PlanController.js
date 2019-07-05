import React from "react";
import axios from "axios";

const PlanController = ({ availablePlans, currentPlan }) => {
  const options = [];
  availablePlans.map(plan =>
    options.push(<option value={plan.PlanID}>{plan.Name}</option>)
  );
  return (
    <React.Fragment>
      <select id="PlanSelector" name="PlanSelector">
        {options}
      </select>
      <input type="text" id="PlanName" />
      <button type="button" id="SavePlan" />
      <button type="button" id="SaveAsNewPlan" />
    </React.Fragment>
  );
};

export default PlanController;
