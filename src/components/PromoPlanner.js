import React from "react";
import axios from "axios";
import PromoCalendar from "../components/PromoCalendar";
import ForecastAssumptions from "../components/ForecastAssumptions";
import KPISummary from "../components/KPISummary";
import PlanController from "../components/PlanController";
import "../styles/PromoPlanner.css";

class PromoPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMaster: props.productMaster,
      promoTypes: props.promoTypes,
      algorithm: props.algorithm,
      productPromoTypeFrequency: [],
      focusedProductPromoType: "",
      availablePlans: props.availablePlans,
      currentPlan: { PlanID: 0 }
    };
    this.handle_PlanSelectorDropDown_onChange = this.handle_PlanSelectorDropDown_onChange.bind(
      this
    );
    this.handle_PromoCalendarInput_focusToggle = this.handle_PromoCalendarInput_focusToggle.bind(
      this
    );
    this.handle_PromoCalendarInput_onChange = this.handle_PromoCalendarInput_onChange.bind(
      this
    );
  }

  async componentDidMount() {
    // const productsResponse = await axios.get("http://localhost:3001/products");
    // const promoTypesResponse = await axios.get(
    //   "http://localhost:3001/promoguidelines/promotypes"
    // );
    // const algorithmResponse = await axios.get("http://localhost:3001/promoparams");

    const productsResponse = await axios.get(
      "https://wishful-product-planning-api.herokuapp.com/products"
    );
    const promoTypesResponse = await axios.get(
      "https://wishful-product-planning-api.herokuapp.com/promoguidelines/promotypes"
    );
    const algorithmResponse = await axios.get(
      "https://wishful-product-planning-api.herokuapp.com/promoparams"
    );

    this.setState(currentState => {
      const defaultProductPromoTypeFrequency = [];
      currentState.productMaster = productsResponse.data;
      currentState.promoTypes = promoTypesResponse.data;
      currentState.algorithm = algorithmResponse.data;

      // Extract all product codes from productMaster
      const productCodes = [];
      currentState.productMaster.map(product => {
        return productCodes.push(product.Code);
      });
      // Construct productPromoTypeFrequency IDs
      for (let i = 0; i < productCodes.length; i++) {
        for (let j = 0; j < currentState.promoTypes.length; j++) {
          let tempObj = {
            ID: productCodes[i] + "-" + currentState.promoTypes[j].PTID,
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

  async handle_PlanSelectorDropDown_onChange(event) {
    // STEP 1: Get the selected PlanID from the Plan Controller component
    // STEP 2: Use async await to call remote API to get the full plan using PlanID
    // STEP 3: Call this.setState to update currentPlan and productPromoTypeFrquency
    const planID = event.target.value;
    console.log(planID);
    const response = await axios.get(
      `http://localhost:3001/promoplans/${planID}`
    );
    const promoPlan = response.data.PlanDetail;
    promoPlan.map(plan => {
      delete plan._id;
      return;
    });
    delete promoPlan._id;
    console.log(promoPlan);
    this.setState({
      productPromoTypeFrequency: promoPlan,
      currentPlan: planID
    });
    console.log(this.state);
  }

  handle_PromoCalendarInput_focusToggle(productPromoTypeId) {
    this.setState(currentState => {
      return { focusedProductPromoType: productPromoTypeId };
    });
  }

  handle_PromoCalendarInput_onChange(productPromoTypeId, event) {
    const currentPoductPromoTypeId = productPromoTypeId;
    // ? productPromoTypeId
    // : this.state.focusedProductPromoType;

    const currentFrequency = this.state.productPromoTypeFrequency.find(
      productPromoType => productPromoType.ID === currentPoductPromoTypeId
    ).Frequency;
    const newFrequency = event.target.value;
    const frequencyDifference = newFrequency - currentFrequency;

    // console.log("New Frequency: ", newFrequency);
    // console.log("Current Frequency: ", currentFrequency);
    // console.log("Frequency Difference: ", frequencyDifference);

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
        // console.log(nonPromoWeekId);
        currentState.productPromoTypeFrequency.find(
          productPromoType => productPromoType.ID === nonPromoWeekId
        ).Frequency -= frequencyDifference;

        return {
          productPromoTypeFrequency: currentState.productPromoTypeFrequency
        };
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Promo Planner</h1>
        <PlanController
          availablePlans={this.state.availablePlans}
          currentPlan={this.state.currentPlan}
          handle_PlanSelectorDropDown_onChange={
            this.handle_PlanSelectorDropDown_onChange
          }
        />
        <KPISummary
          productPromoTypeFrequency={this.state.productPromoTypeFrequency}
          forecastAssumptions={this.state.algorithm}
        />
        <div className="Plan">
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
        </div>
      </React.Fragment>
    );
  }
}

export default PromoPlanner;
