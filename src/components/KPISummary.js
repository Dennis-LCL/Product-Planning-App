import React from "react";

const KPISummary = ({ promoFrequency, forecastAssumptions }) => {
  let annualKPIs = { GIVForecast: 0 };
  const isFrequencyReceived = promoFrequency.length !== 0 && true;
  const isAssumptionsReceived = forecastAssumptions.length !== 0 && true;

  if (isFrequencyReceived && isAssumptionsReceived) {
    annualKPIs.GIVForecast =
      promoFrequency[0].Frequency *
        forecastAssumptions[0].KPIs.ScanUnit *
        forecastAssumptions[0].KPIs.BaseListPrice +
      promoFrequency[1].Frequency *
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
