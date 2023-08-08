# Responsive DataGrid

``Copiar carpeta DataGrid (/src/components)``

## Required CSS

```css
.datagrid-scroll {
  overflow-y: auto;
}

.datagrid-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 10px;
}

.datagrid-scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.datagrid-scroll::-webkit-scrollbar-thumb {
  background-color: #d8d8d8;
  border-radius: 10px;
}
```

### Example

```javascript
// Actions
// 'edit', 'edit-remove', 'edit-remove-visibility'
```

```javascript
const MyComponent = () => {
  const createHandler = () => alert("created");
  const editHandler = (param) => alert("edited", JSON.stringify(param));
  const removeHandler = (param) => alert("removed", JSON.stringify(param));

  const loading = false;

  const ExampleElement = (param) => (
    <Chip
      sx={{ minWidth: 110 }}
      label={param.status_one}
      color={param.status_one === "Accepted" ? "success" : param.status_one === "Rejected" ? "error" : "warning"}
      onClick={() => console.log(param)}
    />
  );

  const columns = [
    { key: "id", label: "ID", width: "w-16" },
    { key: "name", label: "Patient" },
    { key: "number", label: "Number" },
    { key: "country", label: "Country", route: ["country", "sub", "name"] },
    { key: "status", label: "Status", route: ["estado", "name"] },
    { key: "status_one", label: "Status 1", renderCell: ExampleElement },
    { key: "action", label: "Acciones", width: "w-20", action: "edit-remove" },
  ];

  const data = [
    {
      id: 1,
      name: "Clyde Martinez",
      number: "18.1128",
      country: { sub: { name: "Tuvalu" } },
      status: { name: "Active" },
      status_one:'Accepted',
    },
  ];

  const actionHandler = {
    create: createHandler,
    edit: editHandler,
    remove: removeHandler,
  };

  // pageSize={10 || 25 || 50 || 100}

  return (
    <Datagrid pageSize={25} columns={columns} rows={data} actionHandler={actionHandler} loading={loading} saveRawData />
  );
};

export default MyComponent;
```
