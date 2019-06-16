import React from "react";

const KPISummary = ({ productPromoTypeFrequency, forecastAssumptions }) => {
  const GIVTarget = 250000;
  const GIVLastYear = 230000;
  let GIVGap;
  let GIVForecastIYA;

  let annualKPIs = { GIVForecast: 0 };
  let selectedKPIs;
  const isFrequencyReceived = productPromoTypeFrequency.length !== 0 && true;
  const isAssumptionsReceived = forecastAssumptions.length !== 0 && true;

  if (isFrequencyReceived && isAssumptionsReceived) {
    // GIV FORECAST
    annualKPIs.GIVForecast = productPromoTypeFrequency
      .map(productPromoTypeFrequency => {
        // console.log(productPromoTypeFrequency);
        selectedKPIs = forecastAssumptions.find(
          productPromoType =>
            productPromoType.ID === productPromoTypeFrequency.ID
        ).KPIs;
        // console.log(selectedKPIs);
        // console.log(productPromoTypeFrequency.Frequency);
        // console.log(selectedKPIs.ScanUnit);
        // console.log(selectedKPIs.BaseListPrice);
        return (
          productPromoTypeFrequency.Frequency *
          selectedKPIs.ScanUnit *
          selectedKPIs.BaseListPrice
        );
      })
      .reduce((total, currentValue) => (total += currentValue));
    // console.log(annualKPIs.GIVForecast);

    // GIV GAP
    GIVGap = annualKPIs.GIVForecast - GIVTarget;

    // NET SUFFICIENCY
    annualKPIs.NetSufficiency = productPromoTypeFrequency
      .map(productPromoTypeFrequency => {
        selectedKPIs = forecastAssumptions.find(
          productPromoType =>
            productPromoType.ID === productPromoTypeFrequency.ID
        ).KPIs;
        return (
          productPromoTypeFrequency.Frequency * selectedKPIs.NetSufficiency
        );
      })
      .reduce((total, currentValue) => (total += currentValue));
    // console.log(annualKPIs.NetSufficiency);

    // TOTAL BUDGET
    annualKPIs.TotalBudget = productPromoTypeFrequency
      .map(productPromoTypeFrequency => {
        selectedKPIs = forecastAssumptions.find(
          productPromoType =>
            productPromoType.ID === productPromoTypeFrequency.ID
        ).KPIs;
        return productPromoTypeFrequency.Frequency * selectedKPIs.TotalBudget;
      })
      .reduce((total, currentValue) => (total += currentValue));
    // console.log(annualKPIs.TotalBudget);

    // TOTAL COST
    annualKPIs.TotalCost = productPromoTypeFrequency
      .map(productPromoTypeFrequency => {
        selectedKPIs = forecastAssumptions.find(
          productPromoType =>
            productPromoType.ID === productPromoTypeFrequency.ID
        ).KPIs;
        return productPromoTypeFrequency.Frequency * selectedKPIs.TotalCost;
      })
      .reduce((total, currentValue) => (total += currentValue));
    // console.log(annualKPIs.TotalCost);
  }

  return (
    <React.Fragment>
      <h2>KPI Summary</h2>
      <label htmlFor="GIVTarget">GIV Target:</label>
      <output id="GIVTarget">{GIVTarget}</output>
      <br />
      <label htmlFor="GIVForecast">GIV Forecast:</label>
      <output id="GIVForecast">{annualKPIs.GIVForecast}</output>
      <br />
      <label htmlFor="GIVGap">GIV Gap:</label>
      <output id="GIVGap">{GIVGap}</output>
      <br />
      <label htmlFor="NetSufficiency">Net Sufficiency:</label>
      <output id="NetSufficiency">{annualKPIs.NetSufficiency}</output>
      <br />
      <label htmlFor="TotalBudget">Total Budget:</label>
      <output id="TotalBudget">{annualKPIs.TotalBudget}</output>
      <br />
      <label htmlFor="TotalCost">Total Cost:</label>
      <output id="TotalCost">{annualKPIs.TotalCost}</output>
      <br />
    </React.Fragment>
  );
};

export default KPISummary;
