import { useState, useContext } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { AppContext } from "core/context";
import { create } from "modules/saleManagement/services/sale.services";
import { styles } from "./styles";

type NewSale = {
  name: string;
  description: string;
};
export const CreateSaleComponent: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const [data, setData] = useState<NewSale>(Object({}));
  const { setNotification } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    create(data)
      .then(() => {
        handleClose();
        setNotification({ message: "Venta registrada correctamente", severity: "success" });
      })
      .catch(() => setNotification({ message: "Error al registrar la venta", severity: "error" }));
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.root}>
      <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
        Registrar Venta
      </Typography>
      <TextField label="Nombre" name="name" onChange={handleChange} />
      <TextField label="Descripcion" name="description" onChange={handleChange} />

      <Button variant="contained" fullWidth type="submit">
        Registrar Venta
      </Button>
    </Box>
  );
};
