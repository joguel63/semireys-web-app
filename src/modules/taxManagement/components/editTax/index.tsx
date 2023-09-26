import { useState, useContext } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { AppContext } from "core/context";
import { update } from "core/services/tax.services";
import { Tax } from "modules/taxManagement/types";
import { styles } from "./styles";

type EditTax = {
  name: string;
  description: string;
};
export const EditCategoryComponent: React.FC<{
  handleClose: () => void;
  taxInfo: Tax;
}> = ({ handleClose, taxInfo }) => {
  const [data, setData] = useState<EditTax>({
    name: taxInfo.name,
    description: taxInfo.description,
  });
  const { setNotification } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    update(taxInfo.id, data)
      .then(() => {
        handleClose();
        setNotification({ message: "Impuesto editado correctamente", severity: "success" });
      })
      .catch(() => setNotification({ message: "Error al editar el Impuesto", severity: "error" }));
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit} sx={styles.root}>
      <Typography fontSize="24px" fontWeight="bold" textAlign="center" gutterBottom>
        Editar Impuesto
      </Typography>
      <TextField label="Nombre" name="name" onChange={handleChange} defaultValue={taxInfo.name} />
      <TextField
        label="Descripcion"
        name="description"
        onChange={handleChange}
        defaultValue={taxInfo.description}
      />

      <Button variant="contained" fullWidth type="submit">
        Editar Impuesto
      </Button>
    </Box>
  );
};
