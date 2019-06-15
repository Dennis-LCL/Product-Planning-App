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
      productPromoTypeFrequency: [
        { ID: "A01-NPW", Frequency: 51 },
        { ID: "A01-10% Off", Frequency: 0 },
        { ID: "A01-30% Off", Frequency: 0 },
        { ID: "A01-50% Off", Frequency: 1 },
        { ID: "A02-NPW", Frequency: 52 },
        { ID: "A02-10% Off", Frequency: 0 },
        { ID: "A02-30% Off", Frequency: 0 },
        { ID: "A02-50% Off", Frequency: 0 }
      ],
      focusedProductPromoType: ""
    };
    this.handle_PromoCalendarInput_focusToggle = this.handle_PromoCalendarInput_focusToggle.bind(
      this
    );
  }

  componentDidMount() {
    console.log("componentDidMount is called!!");
    this.setState(currentState => {
      console.log("setState is called.");
      // return { focusedProductPromoType: "A1-10% Off" };
      // });
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
      console.log(defaultProductPromoTypeFrequency);
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

  render() {
    return (
      <React.Fragment>
        {console.log(this.state.productPromoTypeFrequency)}
        <h1>Promo Planner</h1>
        <PromoCalendar
          productMaster={this.state.productMaster}
          promoTypes={this.state.promoTypes}
          handle_PromoCalendarInput_focusToggle={
            this.handle_PromoCalendarInput_focusToggle
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
