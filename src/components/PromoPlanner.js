import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

const PromoPlanner = class PromoPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: columns,
      rowData: rows
    };
  }

  onGridReady = params => {
    this.api = params.api;
    this.columnApi = params.columnApi;
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: "200px", width: "1420px" }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          onGridReady={this.onGridReady}
        />
      </div>
    );
  }
};

const columns = [
  {
    headerName: "Brand",
    field: "brand",
    width: 80,
    resiabl: true,
    sortable: true,
    filer: true
  },
  {
    headrName: "Group",
    field: "group",
    width: 80,
    esiable: true,
    ortble: true,
    iltr: true
  },
  {
    headrName: "EAN",
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
    headerName: "JAN",
    field: "jan",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "FEB",
    field: "feb",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "MAR",
    field: "mar",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "APR",
    field: "apr",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "MAY",
    field: "may",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "JUN",
    field: "jun",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "JUL",
    field: "jul",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "AUG",
    field: "aug",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "SEP",
    field: "sep",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "OCT",
    field: "oct",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "NOV",
    field: "nov",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  },
  {
    headerName: "DEC",
    field: "dec",
    width: 80,
    resizable: true,
    sortable: true,
    filter: true,
    editable: true
  }
];

const rows = [
  {
    brand: "Boldie",
    group: "Shampoo",
    ean: "A01",
    product: "Drop Your Hair Shampoo",
    jan: "",
    feb: "10% Off",
    mar: "10% Off",
    apr: "",
    may: "30% Off",
    jun: "10% Off",
    jul: "",
    aug: "10% Off",
    sep: "",
    oct: "",
    nov: "",
    dec: "50% Off"
  },
  {
    brand: "Boldie",
    group: "Shampoo",
    ean: "A02",
    product: "Scratch Your Sculp Shampoo",
    jan: "",
    feb: "10% Off",
    mar: "10% Off",
    apr: "",
    may: "30% Off",
    jun: "10% Off",
    jul: "",
    aug: "10% Off",
    sep: "",
    oct: "",
    nov: "",
    dec: "50% Off"
  },
  {
    brand: "Boldie",
    group: "Shampoo",
    ean: "A03",
    product: "Burn The Root Shampoo",
    jan: "",
    feb: "10% Off",
    mar: "10% Off",
    apr: "",
    may: "30% Off",
    jun: "10% Off",
    jul: "",
    aug: "10% Off",
    sep: "",
    oct: "",
    nov: "",
    dec: "50% Off"
  },
  {
    brand: "Boldie",
    group: "Conditioner",
    ean: "B01",
    product: "Make It Oily Conditioner",
    jan: "",
    feb: "10% Off",
    mar: "10% Off",
    apr: "",
    may: "30% Off",
    jun: "",
    jul: "",
    aug: "",
    sep: "10% Off",
    oct: "",
    nov: "30% Off",
    dec: "50% Off"
  },
  {
    brand: "Boldie",
    group: "Conditioner",
    ean: "B02",
    product: "Tangle It Up Conditioner",
    jan: "",
    feb: "10% Off",
    mar: "10% Off",
    apr: "",
    may: "30% Off",
    jun: "",
    jul: "",
    aug: "",
    sep: "10% Off",
    oct: "",
    nov: "30% Off",
    dec: "50% Off"
  }
];

export default PromoPlanner;
