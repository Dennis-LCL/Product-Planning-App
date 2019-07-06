import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PlanController from "../components/PlanController";

describe("PlanController component should be rendered with required DOM nodes.", () => {
  it("should render and empty PlanController component.", () => {
    const { getByText } = render(
      <PlanController availablePlans={[]} currentPlan={[]} />
    );
    expect(!!getByText).toBeTruthy();
  });

  it("should render a drop-down list with id 'PlanSelector'.", () => {
    const { getByText } = render(
      <PlanController availablePlans={[]} currentPlan={[]} />
    );
    const inputField = document.getElementById("PlanSelector");
    expect(inputField).toBeTruthy();
  });

  it("should render a input field with id 'NewPlanName'.", () => {
    const { getByText } = render(
      <PlanController availablePlans={[]} currentPlan={[]} />
    );
    const inputField = document.getElementById("NewPlanName");
    expect(inputField).toBeTruthy();
  });

  it("should render a save button with id 'SavePlan'.", () => {
    const { getByText } = render(
      <PlanController availablePlans={[]} currentPlan={[]} />
    );
    const button = document.getElementById("SavePlan");
    expect(button).toBeTruthy();
  });

  it("should render a save button with id 'SaveAsNewPlan'.", () => {
    const { getByText } = render(
      <PlanController availablePlans={[]} currentPlan={[]} />
    );
    const button = document.getElementById("SaveAsNewPlan");
    expect(button).toBeTruthy();
  });
});

describe("PlanController component should control which plan is shown on screen.", () => {
  it("should show the available plans in the drop-down list", () => {
    const { getByText } = render(
      <PlanController availablePlans={mockAvailablePlans} currentPlan={[]} />
    );
    expect(getByText("1st Draft Plan")).toBeInTheDocument();
    expect(getByText("Proposed Plan")).toBeInTheDocument();
  });

  it("should show an empty plan in the drop-down list", () => {
    const { getByText } = render(
      <PlanController availablePlans={mockAvailablePlans} currentPlan={[]} />
    );
    expect(getByText("--Select a Plan--")).toBeInTheDocument();
  });

  xit("should show promo plan based on selected Plan ID", () => {
    const { getByText } = render(
      <PlanController
        availablePlans={mockAvailablePlans}
        currentPlan={{ PlanID: 1 }}
      />
    );
  });
});

const mockAvailablePlans = [
  {
    PlanID: 1,
    Name: "1st Draft Plan"
  },
  {
    PlanID: 2,
    Name: "Proposed Plan"
  }
];
