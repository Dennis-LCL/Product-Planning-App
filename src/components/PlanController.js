import React from "react";
import axios from "axios";

const PlanController = ({
  availablePlans,
  currentPlan,
  newPlanName,
  handle_PlanSelectorDropDown_onChange,
  handle_NewPlanNameInput_onChange,
  handle_SaveCurrentPlan_onClick,
  handle_SaveAsNewPlan_onClick
}) => {
  const options = [];
  options.push(<option value="0">--Select a Plan--</option>);
  availablePlans.map(plan =>
    options.push(<option value={plan.PlanID}>{plan.Name}</option>)
  );

  if (currentPlan.PlanID !== 0) {
    return (
      <React.Fragment>
        <select
          id="PlanSelector"
          name="PlanSelector"
          value={currentPlan.PlanID}
          onChange={event => handle_PlanSelectorDropDown_onChange(event)}
        >
          {options}
        </select>
        <input
          type="text"
          id="NewPlanName"
          placeholder="Input New Plan Name Here."
          value={newPlanName}
          onChange={event => handle_NewPlanNameInput_onChange(event)}
        />
        <button
          type="button"
          id="SavePlan"
          onClick={handle_SaveCurrentPlan_onClick}
        >
          Save Current Plan
        </button>
        <button
          type="button"
          id="SaveAsNewPlan"
          onClick={handle_SaveAsNewPlan_onClick}
        >
          Save as New Plan
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <select
          id="PlanSelector"
          name="PlanSelector"
          value={currentPlan.PlanID}
          onChange={event => handle_PlanSelectorDropDown_onChange(event)}
        >
          {options}
        </select>
        <input
          type="text"
          id="NewPlanName"
          placeholder="Input New Plan Name Here."
          value={newPlanName}
          onChange={event => handle_NewPlanNameInput_onChange(event)}
        />
        {/* <button
          type="button"
          id="SavePlan"
          onClick={handle_SaveCurrentPlan_onClick}
        >
          Save Current Plan
        </button> */}
        <button
          type="button"
          id="SaveAsNewPlan"
          onClick={handle_SaveAsNewPlan_onClick}
        >
          Save as New Plan
        </button>
      </React.Fragment>
    );
  }
};

export default PlanController;
