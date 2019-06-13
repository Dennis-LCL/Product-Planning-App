import React from "react";

class PromoCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMaster: props.productMaster,
      promoTypes: props.promoTypes
    };
  }

  render() {
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
      this.state.promoTypes.map(promoType => <th>{promoType}</th>)
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
        productAttributeValues = Object.values(this.state.productMaster[i]).map(
          attribute => <td>{attribute}</td>
        );
        // Add PromoCalendarInputCells into productRows
        const promoFrequencyCells = this.state.promoTypes.map(promoType => (
          <td>
            <PromoCalendarInputCell />
          </td>
        ));
        productRows.push(
          <tr>
            {productAttributeValues}
            {promoFrequencyCells}
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
        <h2>Promo Calendar</h2>
        <h3>Work Space:</h3>
        <table>
          {promoCalendarColumns}
          {promoCalendarRows}
        </table>
      </React.Fragment>
    );
  }
}

function PromoCalendarInputCell() {
  return <input className="promoFrequency" placeholder="--" />;
}

export default PromoCalendar;
