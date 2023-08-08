import { Chip } from "@mui/material";
import DataGridResponsive from "./components/DataGrid";

const Element = (param) => (
  <Chip
    sx={{ minWidth: 110 }}
    label={param.estado1}
    color={param.estado1 === "Aceptado" ? "success" : param.estado1 === "Rechazado" ? "error" : "warning"}
    onClick={() => console.log(param)}
  />
);

const columns = [
  { key: "id", label: "ID", width: "w-16" },
  { key: "name", label: "Patient" },
  { key: "number", label: "Number" },
  { key: "country", label: "Country", route: ["country", "sub", "name"] },
  { key: "estado", label: "Status", route: ["estado", "name"] },
  { key: "estado1", label: "Status 1", renderCell: Element },
  { key: "action", label: "Acciones", width: "w-20", action: "edit-remove" },
];

const rows = [
  {
    id: 1,
    name: "Clyde Martinez MartinezMartinez",
    number: "18.1128",
    country: { sub: { name: "Tuvalu" } },
    estado: { name: "Active" },
    estado1: "Rechazado",
  },
  {
    id: 2,
    name: "Kathryn Woods",
    number: "6.920",
    country: { sub: { name: "U.S. Virgin Islands" } },
    estado: { name: "Active" },
    estado1: "Aceptado",
  },
  {
    id: 3,
    name: "Douglas Carlson",
    number: "72.7212",
    country: { sub: { name: "Turkmenistan" } },
    estado: { name: "Active" },
    estado1: "Pendiente",
  },
];

function App() {
  const createHandler = () => alert("created");
  const editHandler = (param) => console.log(param);
  const removeHandler = (param) => alert("removed", JSON.stringify(param));

  return (
    <div className="p-5">
      <DataGridResponsive
        rows={rows}
        columns={columns}
        actionHandler={{ edit: editHandler, remove: removeHandler, create: createHandler }}
        saveRawData
      />
    </div>
  );
}

export default App;
