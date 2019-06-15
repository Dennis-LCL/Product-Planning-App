import React from "react";
import PromoCalendar from "../components/PromoCalendar";
import ForecastAssumptions from "../components/ForecastAssumptions";
import KPISummary from "../components/KPISummary";

class PromoPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMaster: props.productMaster,
      promoTypes: props.promoTypes,
      algorithm: props.algorithm,
      productPromoTypeFrequency: [],
      focusedProductPromoType: ""
    };
    this.handle_PromoCalendarInput_focusToggle = this.handle_PromoCalendarInput_focusToggle.bind(
      this
    );
    this.handle_PromoCalendarInput_onChange = this.handle_PromoCalendarInput_onChange.bind(
      this
    );
  }

  componentDidMount() {
    this.setState(currentState => {
      const defaultProductPromoTypeFrequency = [];
      // Extract all product codes from productMaster
      const productCodes = [];
      currentState.productMaster.map(product => {
        return productCodes.push(product.Code);
      });
      // Construct productPromoTypeFrequency IDs
      for (let i = 0; i < productCodes.length; i++) {
        for (let j = 0; j < currentState.promoTypes.length; j++) {
          let tempObj = {
            ID: productCodes[i] + "-" + currentState.promoTypes[j],
            Frequency: 0
          };
          defaultProductPromoTypeFrequency.push(tempObj);
        }
        let nonPromoWeekFrequency = {
          ID: productCodes[i] + "-NPW",
          Frequency: 52
        };
        defaultProductPromoTypeFrequency.push(nonPromoWeekFrequency);
      }
      // console.log(defaultProductPromoTypeFrequency);
      return {
        productPromoTypeFrequency: defaultProductPromoTypeFrequency
      };
    });
  }

  handle_PromoCalendarInput_focusToggle(productPromoTypeId) {
    this.setState(currentState => {
      return { focusedProductPromoType: productPromoTypeId };
    });
  }

  handle_PromoCalendarInput_onChange(productPromoTypeId, event) {
    const currentPoductPromoTypeId = productPromoTypeId
      ? productPromoTypeId
      : this.state.focusedProductPromoType;

    const currentFrequency = this.state.productPromoTypeFrequency.find(
      productPromoType => productPromoType.ID === currentPoductPromoTypeId
    ).Frequency;
    const newFrequency = event.target.value;
    const frequencyDifference = newFrequency - currentFrequency;

    console.log(newFrequency);
    console.log(currentFrequency);
    console.log(frequencyDifference);

    if (frequencyDifference !== 0) {
      this.setState(currentState => {
        // Find the right Product-PromoType cell and update the frequency to newFrequency
        currentState.productPromoTypeFrequency.find(
          productPromoType => productPromoType.ID === productPromoTypeId
        ).Frequency = newFrequency;
        // Then, find the Non-Promo-Week of the product, and update the frequency, i.e. its currentFrequency - newFrequency.
        // Construct the productPromoTypeId for the non-promo-week
        const idArray = productPromoTypeId.split("-");
        const nonPromoWeekId = idArray[0] + "-NPW";
        console.log(nonPromoWeekId);
        currentState.productPromoTypeFrequency.find(
          productPromoType => productPromoType.ID === nonPromoWeekId
        ).Frequency -= newFrequency;

        return {};
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Promo Planner</h1>
        <PromoCalendar
          productMaster={this.state.productMaster}
          promoTypes={this.state.promoTypes}
          productPromoTypeFrequency={this.state.productPromoTypeFrequency}
          handle_PromoCalendarInput_focusToggle={
            this.handle_PromoCalendarInput_focusToggle
          }
          handle_PromoCalendarInput_onChange={
            this.handle_PromoCalendarInput_onChange
          }
        />
        <ForecastAssumptions
          productPromoTypeId={this.state.focusedProductPromoType}
          algorithm={this.state.algorithm}
        />
        <KPISummary
          productPromoTypeFrequency={this.state.productPromoTypeFrequency}
          forecastAssumptions={this.state.algorithm}
        />
      </React.Fragment>
    );
  }
}

export default PromoPlanner;
