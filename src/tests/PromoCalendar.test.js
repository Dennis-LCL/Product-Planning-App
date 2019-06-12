import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PromoCalendar from "../components/PromoCalendar";
import { exportAllDeclaration } from "@babel/types";

/*
Feature: Promo Calendar
Scenario: User launches the Promo Planner App first time and uses the Promo Calendar

Given(that)...
- I have a valid credential and already logged in, and
- I have pre-configured data access and base data,

When...
- I first launch the Promo Planner App and go to Promo Calendar,

Then...
The App should show me a Promo Calendar(a table) with below initial condition:
- All the products in my customer-category shown on rows,
- Non-Promo week and all authorized Promo Types on column,
- All the cells under Non-Promo Week column set to 52(weeks) for each product,
- All the cells under each Promo Type column set to 0(weeks) for each product.
*/

describe("Promo Calendar's initial condition when user launches it the first time.", () => {
  describe("PromoCalendar component should be rendered with required DOM nodes.", () => {
    it("should render and empty PromoCalendar component.", () => {
      const { getByText } = render(<PromoCalendar productMaster={[]} />);
      expect(!!getByText).toBeTruthy();
    });
    it("should render a component title (h2 tag) says 'Promo Calendar'", () => {
      const { getByText } = render(<PromoCalendar productMaster={[]} />);
      expect(getByText("Promo Calendar")).toBeInTheDocument();
    });
    it("should render a work space title (h3 tag) for later showing year, customer, category", () => {
      const { getByText } = render(<PromoCalendar productMaster={[]} />);
      expect(getByText("Work Space:")).toBeInTheDocument();
    });
    it("should render an empty 1R1C table", () => {
      const { getByText } = render(<PromoCalendar productMaster={[]} />);
      expect(getByText("Non-Promo Week")).toBeInTheDocument();
      expect(getByText("Fake Product Numero Uno")).toBeInTheDocument();
    });
  });

  describe("The Promo Calendar should have complete columns.", () => {
    it("should have all product attributes as columns based on product master passed in as props.", () => {
      const { getByText } = render(
        <PromoCalendar productMaster={mockProductMaster} />
      );
      const expectedColumns = Object.keys(mockProductMaster[0]);
      console.log(expectedColumns);
      // expect(getByText(expectedColumns[0])).toBeInTheDocument();
      for (let i = 0; i < expectedColumns.length; i++) {
        expect(getByText(expectedColumns[i])).toBeInTheDocument();
      }
    });
  });

  describe.skip("The Promo Calendar should have all products on rows.", () => {
    it("should render all products from the product master passed in as props for the component.", () => {
      const { getAllByText } = render(
        <PromoCalendar productMaster={mockProductMaster} />
      );
      const numberOfRenderedProducts = getAllByText(/Shampoo/i).length;
      expect(numberOfRenderedProducts).toBe(mockProductMaster.length);
    });
  });

  describe("Each Product's initial value for Promo Types should be 0 with Non-Promo Week set to 52.", () => {});
});

const mockProductMaster = [
  {
    brand: "Boldie",
    group: "Shampoo 250ml",
    code: "A01",
    desc: "Drop Your Hair Shampoo"
  },
  {
    brand: "Boldie",
    group: "Shampoo 250ml",
    code: "A01",
    desc: "Drop Your Hair Shampoo"
  },
  {
    brand: "Boldie",
    group: "Shampoo 250ml",
    code: "A01",
    desc: "Drop Your Hair Shampoo"
  }
];
