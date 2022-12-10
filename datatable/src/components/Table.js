import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const Table = () => {
  const [table, setTable] = useState([]);
  //   const [color, setColor] = useState("red");
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((Data) => Data.json())
      .then((Data) => setTable(Data));
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "first_name",
      headerName: "FirstName",
      width: 200,
    },
    {
      field: "last_name",
      headerName: "LastName",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 200,
    },
    {
      field: "ip_address",
      headerName: "Ipaddress",
      width: 200,
    },
    {
      field: "airport code",
      headerName: "Code",
      width: 200,
    },
    {
      field: "time",
      headerName: "Time",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      render: (rowData) => {(
        <div>
          style={{ background:( rowData.status) === "true" ? "Green" : "red" }}
        </div>
      )},
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 200,
    },
    {
      field: "area",
      headerName: "Area",
      width: 200,
    },
    {
      field: "show",
      headerName: "Show",
      width: 200,
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 200,
    },
  ];
  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        sx={{ m: 2, boxShadow: 20, borderBottom: "none", borderRadius: 4 }}
        rows={table}
        columns={columns}
        checkboxSelection
      />
    </Box>
  );
};

export default Table;
