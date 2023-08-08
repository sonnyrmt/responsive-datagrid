// import DataGridResponsive from "./components/DataGrid/index";
import DataGridResponsive from "./components/DataGrid";

const columns = [
  { key: "id", label: "ID", width: "w-16" },
  { key: "name", label: "Patient" },
  { key: "number", label: "Number" },
  { key: "country", label: "Country", route: ["country", "sub", "name"] },
  { key: "estado", label: "Status", route: ["estado", "name"] },
  { key: "action", label: "Acciones", width: "w-20", action: "edit-remove" },
];

const rows = [
  {
    id: 1,
    name: "Clyde Martinez",
    number: "18.1128",
    country: { sub: { name: "Tuvalu" } },
    estado: { name: "Active" },
  },
  {
    id: 2,
    name: "Kathryn Woods",
    number: "6.920",
    country: { sub: { name: "U.S. Virgin Islands" } },
    estado: { name: "Active" },
  },
  {
    id: 3,
    name: "Douglas Carlson",
    number: "72.7212",
    country: { sub: { name: "Turkmenistan" } },
    estado: { name: "Active" },
  },
];

function App() {
  const createHandler = () => alert("created");
  const editHandler = (param) => alert("edited", JSON.stringify(param));
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
