import React from "react";

class PromoCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMaster: props.productMaster,
      promoTypes: props.promoTypes
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productMaster.length !== this.props.productMaster.length) {
      this.setState({
        productMaster: this.props.productMaster,
        promoTypes: this.props.promoTypes
      });
    }
  }

  render() {
    // console.log(this.props.productPromoTypeFrequency);
    // Construct the columns to show product attributes from product master
    const productExist = this.state.productMaster.length !== 0 && true;
    const productAttributes =
      productExist && Object.keys(this.state.productMaster[0]);
    const productAttributeColumns = productAttributes ? (
      productAttributes.map(attribute => <th>{attribute}</th>)
    ) : (
      <th>Product</th>
    );

    // Construct the columns to show promo types from promo types
    const promoTypeExist = this.state.promoTypes.length !== 0 && true;
    const promoTypeColumns = promoTypeExist ? (
      this.state.promoTypes.map(promoType => <th>{promoType.PromoType}</th>)
    ) : (
      <th>Promo Type</th>
    );

    // Construct the promoCalendarColumns
    const promoCalendarColumns = (
      <thead>
        <tr>
          {productAttributeColumns}
          {promoTypeColumns}
          <th>Non-Promo Week</th>
        </tr>
      </thead>
    );

    // Construct value for each product attribute

    let productAttributeValues;
    let productRows = [];

    if (productExist) {
      for (let i = 0; i < this.state.productMaster.length; i++) {
        // Add productAttributes into productRows
        productAttributeValues = Object.values(this.state.productMaster[i]).map(
          attribute => <td>{attribute}</td>
        );
        // Add PromoCalendarInputCells into productRows
        const isProductPromoTypeFrequencyReceived =
          this.props.productPromoTypeFrequency.length !== 0 && true;
        const promoFrequencyCells = this.state.promoTypes.map(promoType => {
          // Construct the PromoCalendarInputCell ID
          let promoCalendarInputCellId =
            this.state.productMaster[i].Code + "-" + promoType.PTID;

          let numberOfPromoWeeks = isProductPromoTypeFrequencyReceived
            ? this.props.productPromoTypeFrequency.find(
                productPromoType =>
                  productPromoType.ID === promoCalendarInputCellId
              ).Frequency
            : 0;

          return (
            <td>
              <PromoCalendarInputCell
                id={promoCalendarInputCellId}
                numberOfPromoWeeks={numberOfPromoWeeks}
                handle_PromoCalendarInput_focusToggle={
                  this.props.handle_PromoCalendarInput_focusToggle
                }
                handle_PromoCalendarInput_onChange={
                  this.props.handle_PromoCalendarInput_onChange
                }
              />
            </td>
          );
        });
        // Add Non-Promo-Week frequency to the productRows
        // Write something here!!!

        const nonPromoWeekId = this.state.productMaster[i].Code + "-NPW";
        // console.log(nonPromoWeekId);

        let numberOfNonPromoWeeks = isProductPromoTypeFrequencyReceived
          ? this.props.productPromoTypeFrequency.find(
              productPromoType => productPromoType.ID === nonPromoWeekId
            ).Frequency
          : 52;

        productRows.push(
          <tr>
            {productAttributeValues}
            {promoFrequencyCells}
            <td id="NonPromoWeek">{numberOfNonPromoWeeks}</td>
          </tr>
        );
      }
    } else {
      productRows = (
        <tr>
          <td>Fake Product Numero Uno</td>
        </tr>
      );
    }
    const promoCalendarRows = <tbody>{productRows}</tbody>;

    return (
      <React.Fragment>
        <div id="PromoCalendar">
          <h2>Promo Calendar</h2>
          <h3>Work Space:</h3>
          <table>
            {promoCalendarColumns}
            {promoCalendarRows}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

function PromoCalendarInputCell(props) {
  return (
    <input
      id={props.id}
      className="promoFrequency"
      placeholder="--"
      value={props.numberOfPromoWeeks}
      onFocus={() => props.handle_PromoCalendarInput_focusToggle(props.id)}
      onBlur={() => props.handle_PromoCalendarInput_focusToggle("")}
      onChange={event =>
        props.handle_PromoCalendarInput_onChange(props.id, event)
      }
    />
  );
}

export default PromoCalendar;
