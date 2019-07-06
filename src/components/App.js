import React from "react";
import PromoPlanner from "./PromoPlanner";
// import ChartAnnualSummary from "./ChartAnnualSummary";
// import ChartMonthlyTrend from "./ChartMonthlyTrend";
// import PromoPlanner from "./PromoPlanner";
// import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMaster: [],
      promoType: [],
      algorithm: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <PromoPlanner
          productMaster={this.state.productMaster}
          promoTypes={defaultPromoTypes}
          algorithm={this.state.algorithm}
          availablePlans={[]}
        />
      </React.Fragment>
    );
  }
}

export default App;

const defaultPromoTypes = ["10% Off", "30% Off", "50% Off"];
