import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function CurrencyList({ rows }) {
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Currency", flex: 2 },
    { field: "symbol", headerName: "Symbol", flex: 1 },
    { field: "price", headerName: "Price (PKR)", flex: 2 },
    { field: "marketCap", headerName: "Market Cap (PKR)", flex: 2 },
    { field: "volume", headerName: "24h Volume (PKR)", flex: 2 },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50]}
        disableRowSelectionOnClick
        sx={{
          backgroundColor: "#121212",
          color: "#26ff00ff",
          border: "none",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1e1e1e",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #333",
          },
        }}
      />
    </div>
  );
}
