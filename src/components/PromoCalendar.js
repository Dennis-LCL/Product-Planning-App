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
    let promoCalendarRows = [];
    if (productExist) {
      const firstProductValues = Object.values(this.state.productMaster[0]);
      console.log(firstProductValues);
      promoCalendarRows = firstProductValue.
    } else {
      promoCalendarRows = (
        <tr>
          <td>Fake Product Numero Uno</td>
        </tr>
      );
    }
    // Fill up the PromoCalendar table with product from product master
    // const promoCalendarRows = this.state.productMaster.map(product => {
    //   return (
    //     <tr>
    //       <td>{product.desc}</td>
    //       <td>52</td>
    //     </tr>
    //   );
    // });
    // console.log(promoCalendarRows);

    return (
      <React.Fragment>
        <h2>Promo Calendar</h2>
        <h3>Work Space:</h3>
        <table>
          {promoCalendarColumns}
          <tbody>
            <tr>
              <td>Fake Product Numero Uno</td>
              <td>52</td>
              <td />
              <td />
              <td />
            </tr>
            {promoCalendarRows}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default PromoCalendar;
