import React from "react";
import { render } from "@testing-library/react";

class ForecastAssumptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productPromoTypeId: props.productPromoTypeId,
      productPromoTypeKPIs: props.algorithm
    };
  }

  render() {
    const isIdReceived = !!this.state.productPromoTypeId;
    const isKPIsReceived = this.state.productPromoTypeKPIs.length !== 0 && true;
    let selectedKPIs;

    if (isIdReceived && isKPIsReceived) {
      selectedKPIs = this.state.productPromoTypeKPIs.find(
        productPromoType =>
          productPromoType.ID === this.state.productPromoTypeId
      ).KPIs;
    } else {
      selectedKPIs = defaultKPIs;
    }
    console.log(this.state.productPromoTypeId);
    console.log(isIdReceived);
    return (
      <React.Fragment>
        <h2>Forecast Assumptions</h2>
        <h3>for Product - Promo Type:</h3>
        <table>
          <thead>
            <tr>
              <td>Business Measures</td>
              <td>Applied FCST</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Scan Unit</td>
              <td>{selectedKPIs.ScanUnit}</td>
            </tr>
            <tr>
              <td>Baseline Unit</td>
              <td>{selectedKPIs.BaselineUnit}</td>
            </tr>
            <tr>
              <td>Incremental Unit</td>
              <td>{selectedKPIs.IncrementalUnit}</td>
            </tr>
            <tr>
              <td>Incremental GIV ($)</td>
              <td>{selectedKPIs.IncrementalGIV}</td>
            </tr>
            <tr>
              <td>Base List Price ($)</td>
              <td>{selectedKPIs.BaseListPrice}</td>
            </tr>
            <tr>
              <td>Total Promo Cost ($)</td>
              <td>{selectedKPIs.TotalCost}</td>
            </tr>
            <tr>
              <td>Scan Deal Unit Cost ($)</td>
              <td>{selectedKPIs.ScanDealUnitCost}</td>
            </tr>
            <tr>
              <td>Total Budget ($)</td>
              <td>{selectedKPIs.TotalBudget}</td>
            </tr>
            <tr>
              <td>Fund Rate (%)</td>
              <td>{selectedKPIs.FundRate}</td>
            </tr>
            <tr>
              <td>Net Sufficiency ($)</td>
              <td>{selectedKPIs.NetSufficiency}</td>
            </tr>
            <tr>
              <td>ROI</td>
              <td>{selectedKPIs.ROI}</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const defaultKPIs = {
  ScanUnit: null,
  BaselineUnit: null,
  IncrementalUnit: null,
  IncrementalGIV: null,
  BaseListPrice: null,
  TotalCost: null,
  ScanDealUnitCost: null,
  TotalBudget: null,
  FundRate: null,
  NetSufficiency: null,
  ROI: null
};

export default ForecastAssumptions;
