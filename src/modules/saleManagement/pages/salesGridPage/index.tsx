import { useEffect, useState, useCallback, useContext } from "react";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";
import { GridProvider, Modal } from "core/components";
import { AppContext } from "core/context";
import { getAll, remove } from "modules/saleManagement/services/sale.services";
import { Sale } from "modules/saleManagement/types";
import { CreateSaleComponent, EditSaleComponent } from "modules/saleManagement/components";

export const SalesGridPage: React.FC = () => {
  const [rows, setRows] = useState<Sale[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalInfo, setModalInfo] = useState<{ open: boolean; data?: Sale }>({ open: false });
  const { setNotification } = useContext(AppContext);

  const columns: GridColDef<Sale>[] = [
    { field: "id", headerName: "Id", flex: 1 },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Descripcion",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row">
          <IconButton color="info" onClick={() => setModalInfo({ open: true, data: row })}>
            <Tooltip title="Editar" placement="right">
              <Edit />
            </Tooltip>
          </IconButton>
          <IconButton color="error">
            <Tooltip title="Eliminar" placement="right" onClick={() => handleDelete(row.id)}>
              <Delete />
            </Tooltip>
          </IconButton>
        </Stack>
      ),
    },
  ];

  const handleClose = () => {
    fetchProducts();
    setModalInfo({ open: false, data: undefined });
  };

  const handleDelete = (id: number) => {
    remove(id)
      .then(() => {
        fetchProducts();
        setNotification({ message: "Venta eliminada correctamente", severity: "success" });
      })
      .catch(() => setNotification({ message: "Error al eliminar la venta", severity: "error" }));
  };

  const fetchProducts = useCallback(() => {
    setLoading(true);
    getAll().then(({ data }) => {
      setRows(data?.data ?? []);
      setLoading(false);
    });
  }, []);

  useEffect(() => fetchProducts(), [fetchProducts]);

  return (
    <Box paddingX={5} paddingTop={5}>
      <GridProvider
        title="Gestión de Ventas"
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20, 40, 60, 80, 100]}
        searchPlaceHolder="Buscar Venta"
        onCreate={() => setModalInfo({ data: undefined, open: true })}
        loading={loading}
      />
      <Modal
        open={modalInfo.open}
        onClose={() => setModalInfo({ data: undefined, open: false })}
        closeButton
      >
        {modalInfo.data ? (
          <EditSaleComponent handleClose={handleClose} saleInfo={modalInfo.data} />
        ) : (
          <CreateSaleComponent handleClose={handleClose} />
        )}
      </Modal>
    </Box>
  );
};
