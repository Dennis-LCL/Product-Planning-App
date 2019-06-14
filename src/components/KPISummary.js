import React from "react";

const KPISummary = ({ productPromoTypeFrequency, forecastAssumptions }) => {
  let annualKPIs = { GIVForecast: 0 };
  const isFrequencyReceived = productPromoTypeFrequency.length !== 0 && true;
  const isAssumptionsReceived = forecastAssumptions.length !== 0 && true;

  if (isFrequencyReceived && isAssumptionsReceived) {
    annualKPIs.GIVForecast =
      productPromoTypeFrequency[0].Frequency *
        forecastAssumptions[0].KPIs.ScanUnit *
        forecastAssumptions[0].KPIs.BaseListPrice +
      productPromoTypeFrequency[1].Frequency *
        forecastAssumptions[1].KPIs.ScanUnit *
        forecastAssumptions[1].KPIs.BaseListPrice;
  }

  return (
    <React.Fragment>
      <h2>KPI Summary</h2>;<label htmlFor="GIVForecast">GIV Forecast:</label>
      <output id="GIVForecast">{annualKPIs.GIVForecast}</output>
    </React.Fragment>
  );
};

export default KPISummary;
