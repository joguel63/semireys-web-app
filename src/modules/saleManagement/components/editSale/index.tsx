import { useState, useContext } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { AppContext } from "core/context";
import { update } from "modules/saleManagement/services/sale.services";
import { Sale } from "modules/saleManagement/types";
import { styles } from "./styles";

type EditSale = {
  name: string;
  description: string;
};
export const EditSaleComponent: React.FC<{
  handleClose: () => void;
  saleInfo: Sale;
}> = ({ handleClose, saleInfo }) => {
  const [data, setData] = useState<EditSale>({
    name: saleInfo.name,
    description: saleInfo.description,
  });
  const { setNotification } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    update(saleInfo.id, data)
      .then(() => {
        handleClose();
        setNotification({ message: "Venta editada correctamente", severity: "success" });
      })
      .catch(() => setNotification({ message: "Error al editar la venta", severity: "error" }));
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.root}>
      <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
        Editar Venta
      </Typography>
      <TextField label="Nombre" name="name" onChange={handleChange} defaultValue={saleInfo.name} />
      <TextField
        label="Descripcion"
        name="description"
        onChange={handleChange}
        defaultValue={saleInfo.description}
      />

      <Button variant="contained" fullWidth type="submit">
        Editar Venta
      </Button>
    </Box>
  );
};
