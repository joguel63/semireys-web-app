import { useState, useContext } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { AppContext } from "core/context";
import { create } from "core/services/tax.services";
import { styles } from "./styles";

type NewTax = {
  name: string;
  description: string;
};
export const CreateCategoryComponent: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const [data, setData] = useState<NewTax>(Object());
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
        setNotification({ message: "Impuesto creado correctamente", severity: "success" });
      })
      .catch(() => setNotification({ message: "Error al crear el impuesto", severity: "error" }));
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.root}>
      <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
        Crear Impuesto
      </Typography>
      <TextField label="Nombre" name="name" onChange={handleChange} />
      <TextField label="Descripcion" name="description" onChange={handleChange} />

      <Button variant="contained" fullWidth type="submit">
        Crear Impuesto
      </Button>
    </Box>
  );
};
