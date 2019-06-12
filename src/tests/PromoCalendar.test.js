import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PromoCalendar from "../components/PromoCalendar";
import { isTSAnyKeyword } from "@babel/types";

/*
Feature: Promo Calendar
Scenario: User launches the Promo Planner App first time

Given(that)...
- I have a valid credential and already logged in, and
- I have pre-configured data access and base data,

When...
- I first launch the Promo Planner App,

Then...
The App should show me a Promo Calendar(a table) with below initial condition:
- All the products in my customer - category shown on rows,
- Non - Promo week and all authorized Promo Types on column,
- All the cells under Non - Promo Week column set to 52(weeks) for each product,
- All the cells under each Promo Type column set to 0(weeks) for each product.
*/

describe("Promo Calendar's initial condition When user launches it the first time.", () => {
  describe("The Promo Calendar should have all products on rows.", () => {});
  describe("The Promo Calendar should have all Promo Types on columns.", () => {});
  describe("The Promo Calendar should have a Non-Promo Week column.", () => {});
  describe("Each Product's initial value for Promo Types should be 0 with Non-Promo Week set to 52.", () => {});
});
