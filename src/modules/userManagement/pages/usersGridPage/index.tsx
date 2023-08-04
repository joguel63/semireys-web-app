import { Box, IconButton, Switch, Tooltip } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";
import { GridProvider } from "core/components";

type RowType = {
  code: string;
  name: string;
  email: string;
  active: boolean;
};

const rows: RowType[] = [
  { code: "001", name: "John Doe", email: "john.doe@example.com", active: true },
  { code: "002", name: "Jane Smith", email: "jane.smith@example.com", active: false },
  { code: "003", name: "Michael Johnson", email: "michael.johnson@example.com", active: true },
  { code: "004", name: "Emily Davis", email: "emily.davis@example.com", active: true },
  { code: "005", name: "Daniel Wilson", email: "daniel.wilson@example.com", active: false },
  { code: "006", name: "Sophia Lee", email: "sophia.lee@example.com", active: true },
  { code: "007", name: "Matthew Taylor", email: "matthew.taylor@example.com", active: true },
  { code: "008", name: "Olivia Anderson", email: "olivia.anderson@example.com", active: false },
  { code: "009", name: "James Martinez", email: "james.martinez@example.com", active: true },
  { code: "010", name: "Ava Hernandez", email: "ava.hernandez@example.com", active: true },
  { code: "011", name: "William Brown", email: "william.brown@example.com", active: false },
  { code: "012", name: "Isabella Clark", email: "isabella.clark@example.com", active: true },
  { code: "013", name: "Michael Johnson", email: "michael.johnson@example.com", active: true },
  { code: "014", name: "Mia Allen", email: "mia.allen@example.com", active: true },
  { code: "015", name: "Alexander Scott", email: "alexander.scott@example.com", active: false },
  { code: "016", name: "Charlotte Green", email: "charlotte.green@example.com", active: true },
  { code: "017", name: "Ethan Adams", email: "ethan.adams@example.com", active: true },
  { code: "018", name: "Amelia Baker", email: "amelia.baker@example.com", active: false },
  { code: "019", name: "Daniel Perez", email: "daniel.perez@example.com", active: true },
  { code: "020", name: "Sophia Evans", email: "sophia.evans@example.com", active: true },
  { code: "021", name: "Alexander Stewart", email: "alexander.stewart@example.com", active: false },
  { code: "022", name: "Emma Phillips", email: "emma.phillips@example.com", active: true },
  { code: "023", name: "William Mitchell", email: "william.mitchell@example.com", active: true },
  { code: "024", name: "Ava Turner", email: "ava.turner@example.com", active: false },
  { code: "025", name: "James Garcia", email: "james.garcia@example.com", active: true },
  { code: "026", name: "Olivia Rivera", email: "olivia.rivera@example.com", active: true },
  { code: "027", name: "Logan Cook", email: "logan.cook@example.com", active: false },
  { code: "028", name: "Sofia Ward", email: "sofia.ward@example.com", active: true },
  { code: "029", name: "Benjamin Butler", email: "benjamin.butler@example.com", active: true },
  { code: "030", name: "Abigail Simmons", email: "abigail.simmons@example.com", active: false },
  { code: "031", name: "Michael Foster", email: "michael.foster@example.com", active: true },
  { code: "032", name: "Emily Powell", email: "emily.powell@example.com", active: true },
  { code: "033", name: "Matthew Long", email: "matthew.long@example.com", active: false },
  { code: "034", name: "Ella Patterson", email: "ella.patterson@example.com", active: true },
  { code: "035", name: "Daniel Gonzalez", email: "daniel.gonzalez@example.com", active: true },
  { code: "036", name: "Avery Hughes", email: "avery.hughes@example.com", active: false },
  { code: "037", name: "Mia Washington", email: "mia.washington@example.com", active: true },
  { code: "038", name: "Alexander Price", email: "alexander.price@example.com", active: true },
  { code: "039", name: "Ella Murphy", email: "ella.murphy@example.com", active: false },
  { code: "040", name: "William Jenkins", email: "william.jenkins@example.com", active: true },
];
export const UsersGridPage: React.FC = () => {
  const columns: GridColDef<RowType>[] = [
    { field: "code", headerName: "Codigo", flex: 1 },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Correo Electronico",
      flex: 1,
    },
    {
      field: "active",
      headerName: "Activo",
      headerAlign: "left",
      renderCell: ({ row }) => <Switch checked={row.active} />,
    },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      renderCell: () => (
        <IconButton color="info">
          <Tooltip title="Editar Programa" placement="right">
            <MenuBook />
          </Tooltip>
        </IconButton>
      ),
    },
  ];

  return (
    <Box paddingX={5} paddingTop={5}>
      <GridProvider
        title="Gestión de Usuarios"
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20, 40, 60, 80, 100]}
        searchPlaceHolder="Buscar Usuario"
        getRowId={(row) => row.code}
        onCreate={() => {}}
      />
    </Box>
  );
};
