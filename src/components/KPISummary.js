import React from "react";

const KPISummary = ({ productPromoTypeFrequency, forecastAssumptions }) => {
  let annualKPIs = { GIVForecast: 0 };
  let selectedKPIs;
  const isFrequencyReceived = productPromoTypeFrequency.length !== 0 && true;
  const isAssumptionsReceived = forecastAssumptions.length !== 0 && true;

  if (isFrequencyReceived && isAssumptionsReceived) {
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
  }

  return (
    <React.Fragment>
      <h2>KPI Summary</h2>
      <label htmlFor="GIVForecast">GIV Forecast:</label>
      <output id="GIVForecast">{annualKPIs.GIVForecast}</output>
    </React.Fragment>
  );
};

export default KPISummary;
