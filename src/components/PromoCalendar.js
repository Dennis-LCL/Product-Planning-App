import React from "react";

class PromoCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMaster: props.productMaster
    };
  }

  render() {
    // Construct the PromoCalendar table columns
    let promoCalendarColumns = "";
    console.log(this.state.productMaster.length === 0);
    const productExist = this.state.productMaster.length !== 0 && true;
    const defaultColumns = <th>Product</th>;

    if (productExist) {
      const firstProduct = this.state.productMaster[0];
      const expectedColumns = Object.keys(firstProduct);
      promoCalendarColumns = expectedColumns.map(column => {
        return <th>{column}</th>;
      });
    } else {
      promoCalendarColumns = defaultColumns;
    }

    // Fill up the PromoCalendar table with product from product master
    const promoCalendarRows = this.state.productMaster.map(product => {
      return (
        <tr>
          <td>{product.desc}</td>
          <td>52</td>
        </tr>
      );
    });
    console.log(promoCalendarRows);

    return (
      <React.Fragment>
        <h2>Promo Calendar</h2>
        <h3>Work Space:</h3>
        <table>
          <thead>
            <tr>
              {promoCalendarColumns}
              <th>Non-Promo Week</th>
            </tr>
          </thead>
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
