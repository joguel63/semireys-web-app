import { useState, useContext } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Select } from "core/components";
import { AppContext } from "core/context";
import { Category, CategoryOptions } from "core/enums";
import { create } from "modules/productManagement/services/products.services";
import { styles } from "./styles";

type NewProduct = {
  name: string;
  description: string;
  category_id: number;
  amount: number;
  price_production: number;
};
export const CreateProductComponent: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const [data, setData] = useState<NewProduct>(Object({ category_id: Category.Shirt }));
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
        setNotification({ message: "Producto creado correctamente", severity: "success" });
      })
      .catch(() => setNotification({ message: "Error al crear el producto", severity: "error" }));
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.root}>
      <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
        Crear Producto
      </Typography>
      <TextField label="Nombre" name="name" onChange={handleChange} />
      <TextField label="Descripcion" name="description" onChange={handleChange} />
      <TextField label="Precio de Venta" name="amount" onChange={handleChange} type="number" />
      <TextField
        label="Precio de Produccion"
        name="price_production"
        onChange={handleChange}
        type="number"
      />
      <Select
        options={CategoryOptions}
        label="Categoria"
        name="category_id"
        defaultValue={Category.Shirt}
        onChange={handleChange}
      />
      <Button variant="contained" fullWidth type="submit">
        Crear Producto
      </Button>
    </Box>
  );
};
