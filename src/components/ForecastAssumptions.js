import React from "react";

const ForecastAssumptions = props => {
  const isIdReceived = !!props.productPromoTypeId;
  const isKPIsReceived = props.algorithm.length !== 0 && true;
  let selectedKPIs;

  if (isIdReceived && isKPIsReceived) {
    let algorithmFound = props.algorithm.find(
      productPromoType => productPromoType.ID === props.productPromoTypeId
    );
    selectedKPIs = algorithmFound ? algorithmFound.KPIs : defaultKPIs;
    // selectedKPIs = props.algorithm.find(
    //   productPromoType => productPromoType.ID === props.productPromoTypeId
    // ).KPIs;
  } else {
    selectedKPIs = defaultKPIs;
  }
  // console.log(this.state.productPromoTypeId);
  // console.log(isIdReceived);
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
};

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
