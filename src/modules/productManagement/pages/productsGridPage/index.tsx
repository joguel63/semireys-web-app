import { useEffect, useState, useCallback } from "react";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";
import { GridProvider, Modal } from "core/components";
import { getAll, remove } from "modules/productManagement/services/products.services";
import { Product } from "modules/productManagement/types";
import { CreateProductComponent, EditProductComponent } from "modules/productManagement/components";
import { CategoryLabel } from "core/enums";
import { formatMoney } from "core/utils/formats";

export const ProductsGridPage: React.FC = () => {
  const [rows, setRows] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalInfo, setModalInfo] = useState<{ open: boolean; data?: Product }>({ open: false });
  const columns: GridColDef<Product>[] = [
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
      field: "category_id",
      headerName: "Categoria",
      renderCell: ({ row }) => CategoryLabel.get(row.category_id),
      flex: 1,
    },
    {
      field: "amount",
      flex: 1,
      renderCell: ({ row }) => formatMoney(row.amount),
      headerName: "Precio de Venta",
    },
    {
      field: "price_production",
      flex: 1,
      renderCell: ({ row }) => formatMoney(row.price_production),
      headerName: "Precio de Produccion",
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
    remove(id).then(() => fetchProducts());
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
        title="Gestión de Inventario"
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 20, 40, 60, 80, 100]}
        searchPlaceHolder="Buscar Producto"
        onCreate={() => setModalInfo({ data: undefined, open: true })}
        loading={loading}
      />
      <Modal
        open={modalInfo.open}
        onClose={() => setModalInfo({ data: undefined, open: false })}
        closeButton
      >
        {modalInfo.data ? (
          <EditProductComponent handleClose={handleClose} productInfo={modalInfo.data} />
        ) : (
          <CreateProductComponent handleClose={handleClose} />
        )}
      </Modal>
    </Box>
  );
};
