import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { Bar, Doughnut } from "react-chartjs-2";

import PromoPlanner from "./PromoPlanner";

const PromoCalendar = class PromoCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: columns,
      rowData: rows
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: "180px", width: "680px" }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
        <PromoPlanner />
      </div>
    );
  }
};

const columns = [
  {
    headerName: "Brand",
    field: "brand",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true
  },
  {
    headerName: "Group",
    field: "group",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true
  },
  {
    headerName: "EAN",
    field: "ean",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true
  },
  {
    headerName: "Product",
    field: "product",
    width: 200,
    resizable: true,
    sortable: true,
    filter: true
  },
  {
    headerName: "10%",
    field: "dod10p",
    width: 50,
    resizable: true,
    sortable: true,
    editable: true
  },
  {
    headerName: "30%",
    field: "dod30p",
    width: 50,
    resizable: true,
    sortable: true,
    editable: true
  },
  {
    headerName: "50%",
    field: "dod50p",
    width: 50,
    resizable: true,
    sortable: true,
    editable: true
  },
  {
    headerName: "Base",
    field: "nonPromoWeek",
    width: 80,
    resizable: true,
    sortable: true
  }
];

const rows = [
  {
    brand: "Boldie",
    group: "Shampoo",
    ean: "A01",
    product: "Drop Your Hair Shampoo",
    dod10p: 30,
    dod30p: 10,
    dod50p: 5,
    nonPromoWeek: 7
  },
  {
    brand: "Boldie",
    group: "Shampoo",
    ean: "A02",
    product: "Scratch Your Sculp Shampoo",
    dod10p: 30,
    dod30p: 10,
    dod50p: 5,
    nonPromoWeek: 7
  },
  {
    brand: "Boldie",
    group: "Shampoo",
    ean: "A03",
    product: "Burn The Root Shampoo",
    dod10p: 30,
    dod30p: 10,
    dod50p: 5,
    nonPromoWeek: 7
  },
  {
    brand: "Boldie",
    group: "Conditioner",
    ean: "B01",
    product: "Make It Oily Conditioner",
    dod10p: 30,
    dod30p: 10,
    dod50p: 5,
    nonPromoWeek: 7
  },
  {
    brand: "Boldie",
    group: "Conditioner",
    ean: "B02",
    product: "Tangle It Up Conditioner",
    dod10p: 30,
    dod30p: 10,
    dod50p: 5,
    nonPromoWeek: 7
  }
];

export default PromoCalendar;
